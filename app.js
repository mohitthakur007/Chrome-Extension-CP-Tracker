
var getJSON = function(url, callback) {
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.setRequestHeader("Retry-After", 60000);

xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

xhr.onload = function() {
  var status = xhr.status;
  if (status === 200) {
    callback(null, xhr.response);
  } else {
    callback(status, xhr.response);
  }
};
xhr.send();

};
var a1=0,a2=0,b1=0,b2=0,c1=0,c2=0,d1=0,d2=0,e1=0,e2=0;
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + "%3A" + today.getMinutes() + "%3A" + today.getSeconds();
var dateTime = date+'T'+time;

//     var url="https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/json/contest/"+"&api_key="+"91f897cb848e54e02e68515ba280e27b91601920"
// getJSON(url,function(err, data) {
//     //   if (err !== null) {
//     //     alert('Something went wrong: ' + err);
//     //   } else {
//     //     alert('Your query count: ' + data.quer);
//     //   }
//     console.log(data);
//     });
var result;

   
// // setTimeout(() => {
// //   if(codechefdata.meta.total_count===0)
// //     console("double hello");
// // }, 2000);
const firstFunction=async()=>{
  await getJSON("https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/contest/?username=mohit_99&api_key=91f897cb848e54e02e68515ba280e27b91601920&resource__id=2&start__lt="+dateTime+"&end__gt="+dateTime+"&order_by=start&duration__lt=999999",function(err,data){
    // console.log(data);
    a1=1;
    if(data.meta.total_count!=0)
    $('#on-link')[0].href=data.objects[0].href;
    
    else{
    // $('#on-link').style.visibility = "hidden";
    $('#on')[0].innerText="nothing";
    }
  }
  );
};
  
  
  firstFunction();
  const secondFunction=async()=>{
    await getJSON("https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/contest/?username=mohit_99&api_key=91f897cb848e54e02e68515ba280e27b91601920&resource__id=2&start__gt="+dateTime+"&end__gt="+dateTime+"&order_by=start&limit=5&duration__lt=999999",function(err,data){
      // console.log(data);
      a2=1;
      if(data.meta.total_count!=0){
      $('#fu-time')[0].innerText=data.objects[0].start;
      $('#fu-link')[0].href=data.objects[0].href;}
      else{
        $('#fu-time')[0].innerText="Not declared yet!";
    $('#on-link').style.visibility = "hidden";

      }
    }
    );
  };
  secondFunction();
  //------------------------------------------------------------
  const codeforcesfirstFunction=async()=>{
    await getJSON("https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/contest/?username=mohit_99&api_key=91f897cb848e54e02e68515ba280e27b91601920&resource__id=1&start__lt="+dateTime+"&end__gt="+dateTime+"&order_by=start&duration__lt=999999",function(err,data){
      // console.log(data);
      b1=1;

      if(data.meta.total_count!=0)
      $('#codeforces-on-link')[0].href=data.objects[0].href;
      
      else{
      // $('#on-link').style.visibility = "hidden";
      $('#codeforces-on')[0].innerText="nothing";
      }
    }
    );
  };
    
    
    codeforcesfirstFunction();
    const codeforcessecondFunction=async()=>{
      b2=1;
      await getJSON("https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/contest/?username=mohit_99&api_key=91f897cb848e54e02e68515ba280e27b91601920&resource__id=1&start__gt="+dateTime+"&end__gt="+dateTime+"&order_by=start&limit=5&duration__lt=999999",function(err,data){
        // console.log(data);
        $('#codeforces-fu-time')[0].innerText=data.objects[0].start;
        $('#codeforces-fu-link')[0].href=data.objects[0].href;
      }
      );
    };
    codeforcessecondFunction();
  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // const leetcodefirstFunction=async()=>{
  //   await getJSON("https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/contest/?username=mohit_99&api_key=91f897cb848e54e02e68515ba280e27b91601920&resource__id=1&start__lt="+dateTime+"&end__gt="+dateTime+"&order_by=start&duration__lt=999999",function(err,data){
  //     console.log(data);
  //     if(data.meta.total_count!=0)
  //     $('#leetcode-on-link')[0].href="https://www.google.com";
      
  //     else{
  //     // $('#on-link').style.visibility = "hidden";
  //     $('#leetcode-on')[0].innerText="nothing";
  //     }
  //   }
  //   );
  // };
    
    
  //   leetcodefirstFunction();
  //   const leetcodesecondFunction=async()=>{
  //     await getJSON("https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/contest/?username=mohit_99&api_key=91f897cb848e54e02e68515ba280e27b91601920&resource__id=102&start__gt="+dateTime+"&end__gt="+dateTime+"&order_by=start&limit=5&duration__lt=999999",function(err,data){
  //       if(data.meta.total_count!=0){
  //         $('#leetcode-fu-time')[0].innerText=data.objects[0].start;
  //         $('#leetcode-fu-link')[0].href=data.objects[0].href;}
  //         else{
  //           $('#leetcode-fu-time')[0].innerText="Not declared yet!";
  //       $('#leetcode-fu-link')[0].href="https://leetcode.com/contest/";}
  //     });
  //   };
  //   leetcodesecondFunction();
    //------------------------------------------------------------
    const spojfirstFunction=async()=>{
      await getJSON("https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/contest/?username=mohit_99&api_key=91f897cb848e54e02e68515ba280e27b91601920&resource__id=102&start__lt="+dateTime+"&end__gt="+dateTime+"&order_by=start&duration__lt=999999",function(err,data){
        // console.log(data);
        c1=1;
        if(data.meta.total_count!=0)
        $('#spoj-on-link')[0].href=data.objects[0].href;
        
        else{
        $('#spoj-on-link')[0].href = "https://www.spoj.com/contests/";
        $('#spoj-on')[0].innerText="nothing";
        }
      }
      );
    };
      
      
      spojfirstFunction();
      const spojsecondFunction=async()=>{
        await getJSON("https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/contest/?username=mohit_99&api_key=91f897cb848e54e02e68515ba280e27b91601920&resource__id=26&start__gt="+dateTime+"&end__gt="+dateTime+"&order_by=start&limit=5&duration__lt=999999",function(err,data){
          // console.log(data);
          c2=1;
          if(data.meta.total_count!=0){
            $('#spoj-fu-time')[0].innerText=data.objects[0].start;
            $('#spoj-fu-link')[0].href=data.objects[0].href;}
            else{
              $('#spoj-fu-time')[0].innerText="Not declared yet!";
          $('#spoj-fu-link')[0].href = "https://www.spoj.com/contests/";}
        }
        );
      };
      spojsecondFunction();
      //-----------------------------------------------------------------
      const atcoderfirstFunction=async()=>{
        await getJSON("https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/contest/?username=mohit_99&api_key=91f897cb848e54e02e68515ba280e27b91601920&resource__id=93&start__lt="+dateTime+"&end__gt="+dateTime+"&order_by=start&duration__lt=999999",function(err,data){
          // console.log(data);
          d1=1;
          if(data.meta.total_count!=0)
          $('#atcoder-on-link')[0].href=data.objects[0].href;
          
          else{
          // $('#atcoder-on-link')[0].href="https://atcoder.jp/contests/archive";
          $('#atcoder-on')[0].innerText="nothing";
          }
        }
        );
      };
        
        
        atcoderfirstFunction();
        const atcodersecondFunction=async()=>{
          await getJSON("https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/contest/?username=mohit_99&api_key=91f897cb848e54e02e68515ba280e27b91601920&resource__id=93&start__gt="+dateTime+"&end__gt="+dateTime+"&order_by=start&limit=5&duration__lt=999999",function(err,data){
            // console.log(data);
            d2=1;
            $('#atcoder-fu-time')[0].innerText=data.objects[0].start;
            $('#atcoder-fu-link')[0].href=data.objects[0].href;
          }
          );
        };
        atcodersecondFunction();
        //-----------------------------------------------------------------
        const topcoderfirstFunction=async()=>{
          await getJSON("https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/contest/?username=mohit_99&api_key=91f897cb848e54e02e68515ba280e27b91601920&resource__id=12&start__lt="+dateTime+"&end__gt="+dateTime+"&order_by=start&duration__lt=999999",function(err,data){
            // console.log(data);
            e1=1;
            if(data.meta.total_count!=0){
              console.log("0");

            $('#topcoder-on-link')[0].href=data.objects[0].href;
            }
            else{
              // console.log("1");
            // $('#topcoder-on-link').style.visibility = "hidden";
            $('#topcoder-on')[0].innerText="nothing";
            }
          }
          );
        };
          
          
          topcoderfirstFunction();
          const topcodersecondFunction=async()=>{
            await getJSON("https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/contest/?username=mohit_99&api_key=91f897cb848e54e02e68515ba280e27b91601920&resource__id=12&start__gt="+dateTime+"&end__gt="+dateTime+"&order_by=start&limit=5&duration__lt=999999",function(err,data){
              // console.log(data);
              e2=1;
              $('#topcoder-fu-time')[0].innerText=data.objects[0].start;
              $('#topcoder-fu-link')[0].href=data.objects[0].href;
            $(".se-pre-con").fadeOut("slow");

            }
            );
          };
          topcodersecondFunction();





        
        //, function(err, data) {
//     //   if (err !== null) {
//     //     alert('Something went wrong: ' + err);
//     //   } else {
//     //     alert('Your query count: ' + data.quer);
//     //   }
//     result=data;
//     console.log(data);
//     });
// }


// const secondFunction = async () => {
//  firstFunction();
  // do something else here after firstFunction completes
  

//------------------------------------------------------------//
// function firstFunction(_callback){
//   getJSON("https://cors-anywhere.herokuapp.com/https://clist.by/api/v1/contest/?username=mohit_99&api_key=91f897cb848e54e02e68515ba280e27b91601920&resource__id=2&start__lt="+dateTime+"&end__gt="+dateTime+"&order_by=start&duration__lt=999999");
//   // do some asynchronous work
//   // and when the asynchronous stuff is complete
//   _callback();    
// }

// function secondFunction(){
//   // call first function and pass in a callback function which
//   // first function runs when it has completed
//   firstFunction(function(err, data) {
//       //   if (err !== null) {
//       //     alert('Something went wrong: ' + err);
//       //   } else {
//       //     alert('Your query count: ' + data.quer);
//       //   }
//       result=data;
//       console.log(data);
//       }
// )};    
// secondFunction();
// if(t.meta.total_count===0)
//     console("double hello");

 
