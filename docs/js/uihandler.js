const onClickPost = async () => {
     const nameField = document.getElementById('nameField');
     const addressField = document.getElementById('addressField');
     const res = await postAppendMember(nameField.value, addressField.value);
     if (res.status == 200){
          alert("メンバーを追加しました");
     }else{
          alert("メンバーの追加に失敗しました");
     }
}

const API_URL = "https://script.google.com/macros/s/AKfycbwLCFDEBKj8xCjZ2QMwkcXQdQds49GcAATbdLoZ7WJFdEW_mkY4/exec";
const postAppendMember = async (name, address) => {
     const data = new FormData();
     data.set("name", name);
     data.set("address", address)
     
     const res = await fetch(API_URL, {
          method: "POST", 
          body: data
     });
     return res;
}