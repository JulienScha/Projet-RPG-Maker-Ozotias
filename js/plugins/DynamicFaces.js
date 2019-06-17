/*:
 * @plugindesc Displays dynamic actor Faces
 * @author Gamedev Tutorials
 *
 * @param Actors Picture Name
 * @desc The name for the face picture which represents the actors Index
 * @default Actors
 *
 */


(function() {

  var parameters = PluginManager.parameters('DynamicFaces');
  var actorPictureName = String(parameters['Actors Picture Name'] || 'Actors');

  var _Window_Base_drawFace = Window_Base.prototype.drawFace;
  Window_Base.prototype.drawFace = function(faceName, faceIndex, x, y, width, height) {

     if(faceName == actorPictureName) {
       faceName =  $gameActors.actor(faceIndex+1).faceName();
       faceIndex =  $gameActors.actor(faceIndex+1).faceIndex();
     }
     _Window_Base_drawFace.call(this,faceName, faceIndex, x, y, width, height)

  };

  var _Window_Message_loadMessageFace = Window_Message.prototype.loadMessageFace;
  Window_Message.prototype.loadMessageFace = function() {

   if($gameMessage.faceName() == actorPictureName) {
     var actorIndex = $gameMessage.faceIndex()+1;

     var faceName =  $gameActors.actor(actorIndex).faceName();
     var faceIndex =  $gameActors.actor(actorIndex).faceIndex();
     $gameMessage.setFaceImage(faceName, faceIndex);
   }

   _Window_Message_loadMessageFace.call(this);

  };

})();