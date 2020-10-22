window.onload = function(){
    setInterval(()=>{
        let date = new Date();
        let hours = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let p_hr = document.querySelector('.p_hr');
        let p_mn = document.querySelector('.p_mn');
        let p_sc = document.querySelector('.p_sc');
        let p_hr_rev = document.querySelector('.p_hr_rev');
        let p_mn_rev = document.querySelector('.p_mn_rev');
        let p_sc_rev = document.querySelector('.p_sc_rev');
        p_hr.innerHTML = hours;
        p_mn.innerHTML = min;
        p_sc.innerHTML = sec;
        p_hr_rev.innerHTML = hours;
        p_mn_rev.innerHTML = min;
        p_sc_rev.innerHTML = sec;
    });
};