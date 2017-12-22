var obj={
  dxs1:true,
  dxs2:false,
  dxs3:false,
  dxs4:true,
  dxs5:true
}

for(var i=1;i<=Object.keys(obj).length;i++){
  console.log(obj['dxs'+i])
}