function copyAddr(){
    const el = document.getElementById('contract');
    navigator.clipboard.writeText(el.textContent.trim());
    const btn = document.getElementById('copybtn');
    const old = btn.textContent; btn.textContent='Copied!';
    setTimeout(()=>btn.textContent=old,1200);
  }

