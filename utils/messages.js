const moment=require("moment")
function formatMessage(username,text){
  return{
    username,
    text,
    time:moment(new Date()).format("DD MMM YYYY h:mm a")
  }
}
module.exports=formatMessage
