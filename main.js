

   var listatareas={
          {nombre:"tarea",isDone:true},
          {nombre:"tarea2",isDone:false},
           
           
       







function drawtakslist ()
{
    var lista=document.getElementById("lista");
    for(var i in listatareas){
        var html="<li><input type='checkbox'"+(listatareas[i].isDone?"checked":""+">"+listatareas[i].nombre+"</li>";
                lista.innerHTML += html                              
                                               
                                               }

        }
}