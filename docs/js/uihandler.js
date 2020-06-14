const showMessage = () => {
     const nameField = document.getElementById('nameField');
     alert(nameField.value);
}

const onClickPost = () => {
     const nameField = document.getElementById('nameField');
     const addressField = document.getElementById('addressField');
     postAppendMember(nameField.value, addressField.value);
}

const API_URL = "https://script.google.com/macros/s/AKfycbwLCFDEBKj8xCjZ2QMwkcXQdQds49GcAATbdLoZ7WJFdEW_mkY4/exec";
const postAppendMember = async (name, address) => {
     const data = {name: name, address: address};
     const method = "POST";
     const body = JSON.stringify(data);
     const headers = {
          // 'Accept': 'application/json',
          'Content-Type': 'application/json'
     };
     const res = await fetch(API_URL, {method, headers, body});
     alert(res);
}