let inp = document.getElementById ('myInput');
let btn = document.getElementById ('myBtn');
let ul = document.getElementById ('myULlist');
let del = document.getElementById ('del');
let li = document.getElementsByTagName('li');
let byCheck = document.querySelector('ul');
let close = document.getElementsByClassName('closeBtn');


btn.addEventListener('click', function () {
	let newLi = document.createElement('li');
  newLi.textContent = inp.value;
  	if (inp.value === '') {
        var err = setInterval(function () { 
        inp.placeholder = 'You must write something';
        inp.style.backgroundColor = '#FEEBE6';
          if (inp.value !== '') {
              clearInterval(err);
              inp.placeholder = 'Add what you need to do...';
              inp.style.backgroundColor = 'white';
          }
        }, 0)
  	} else  {
    	ul.appendChild (newLi);
    }
    inp.value = '';
    
	for (let i = 0; i < li.length; i++) {
  		let span = document.createElement('span');
  		span.className = 'closeBtn';
  		li[i].appendChild(span);
	}

	for (let i = 0; i < close.length; i++) {
  	close[i].addEventListener('click', function() {
    	let div = this.parentElement;
    	let c = confirm('Do you really want delete this element?');
    	if(c) {
    		div.style.display = 'none';
    	} else {
    		span.className = 'closeBtn';
    	}

  		})
	}
});

byCheck.addEventListener('click', function (e) {
	if(e.target.tagName === 'LI')
	e.target.classList.toggle('checked');

}, false)

del.addEventListener ('click', function () {
		for (let i = 0; i < li.length; i++) {
     	let div = li[i];
      div.style.display = 'none';
    }   
})
