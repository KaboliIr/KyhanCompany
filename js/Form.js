export let Inputs={
    Name:document.getElementById("exampleInputName"),
    Email:document.getElementById("exampleInputEmail1"),
    Btn:document.getElementById("BtnReq"),
    a:document.querySelectorAll("a"),
    AllBtn:document.querySelector("button")
}

// The Function ValieData
export function ValiData(e){
    e.preventDefault(); 
    const Name=Inputs.Name.value;
    const Email=Inputs.Email.value;
    if(Name == "" || Email == ""){
        Swal.fire({
            icon: 'error',
            title: 'گلم با دقت فیلد را پر کن',
            text: 'بستنی میقولی؟',
            confirmButtonText: 'متوجه شدم'
            // footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    else if(isNaN(Name)==false || isNaN(Email)==false){
        Swal.fire({
            icon: 'error',
            title: 'بلا گرفته با دقت فیلد را پر کن',
            text: 'دوست خوبم من میشی؟',
            confirmButtonText: 'متوجه شدم'
            // footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    else{
        
        Swal.fire({
            icon: 'success',
            title: 'صلوات بفرستید بالاخره فیلد رو به درستی وارد کرد!',
            confirmButtonText: 'تایید',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
            
          })
        
    }
    //The Remove Value
    RemoveValue();
 
 }

//  The Function Remove Value
 function RemoveValue(){
  let Name=Inputs.Name;
   let Email=Inputs.Email;
   

   Name.value=null;
   Email.value=null;

 } 