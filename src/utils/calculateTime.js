
export default function calulateTime(a){
     let t = a.replace("M", ":");
     let time = [...a].splice(2);

     time = time.map((e) => {
       //console.log(e);
       if (e == "M") return ":";
       //else if(e == "S") return ""
       else return e;
     });
     if (time.length == 2) {
       if (!time.includes(":")) time.push(":0");
     }
     time.pop();
     time = time.join("");
     return time

return
}