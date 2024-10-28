function speech(text,s_rate=1,s_volume=100,s_pitch=1){
  try{
    speechSynthesis.cancel()
    let speech_item = new SpeechSynthesisUtterance(text)
    speech_item.rate=s_rate;
    speech_item.volume=s_volume;
    speech_item.pitch=s_pitch;
    speechSynthesis.speak(speech_item)
  }catch{console.log("未成功朗读")}
}

if(confirm("如果您想使用朗读功能，请下载firefox浏览器。\r\n安卓点击确认前往下载，苹果请到App Store。\r\n如果您不想使用朗读功能，请点取消。")){location.href="https://www.32r.com/app/132224.html"}