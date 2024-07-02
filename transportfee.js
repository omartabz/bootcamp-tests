function Omar(transport){
if (transport < 'R80'){
  return 'taxi';
}else if (transport >= 'R100'){
  return 'use uber';
}else if (transport >'R8000'){
    return 'use uber black';
}else {
return 'walk';
}
}  