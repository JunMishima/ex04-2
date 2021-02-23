function scoring(score) {

if (score >= 100) {
  return ('秀')
} else if (score >= 60) {
  return ('良')
} else if (score >= 13) {
  return ('不可')
}  
    // ここを埋める
}

  // 動作確認
  console.log(scoring(100)) //=> 秀
  console.log(scoring(60)) //=> 良
  console.log(scoring(13)) //=> 不可
