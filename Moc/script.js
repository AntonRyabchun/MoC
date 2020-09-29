(function() {
    document.querySelector('input').addEventListener('keydown', function(e) {
     if (e.keyCode !== 13) return;
     let v= this.value;
     this.value='';
     out.textContent= v;
     out.style.color= 'black';
     
     if(v.length>3) out.style.color= 'green';
     if(/[!@#$&*%]/.test(v)) out.style.color= 'red';
    });
  })();