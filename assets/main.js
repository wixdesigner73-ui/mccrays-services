document.querySelector('.menu-btn')?.addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.tab,.tabpane').forEach(e=>e.classList.remove('on'));
  t.classList.add('on');document.getElementById(t.dataset.t).classList.add('on');
}));
document.querySelectorAll('form.form').forEach(f=>f.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(f);
  const body=`Name: ${d.get('first')||''} ${d.get('last')||''}%0D%0APhone: ${d.get('phone')||''}%0D%0AEmail: ${d.get('email')||''}%0D%0A%0D%0A${encodeURIComponent(d.get('msg')||'')}`;
  location.href=`mailto:kmccray936a@aol.com?subject=Website%20Inquiry&body=${body}`;
}));
