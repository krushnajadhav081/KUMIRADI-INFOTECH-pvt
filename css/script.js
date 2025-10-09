 
    const COUNT = 12; // number of dots in the trail
    const dots = [];
    for(let i=0;i<COUNT;i++){
      const d = document.createElement('div');
      d.className = 'trail-dot';
      document.body.appendChild(d);
      dots.push({el:d, x:window.innerWidth/2, y:window.innerHeight/2});
    }

    let mouse = {x: window.innerWidth/2, y: window.innerHeight/2};
    window.addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    function animate(){
      // lead follows mouse
      dots[0].x += (mouse.x - dots[0].x) * 0.35;
      dots[0].y += (mouse.y - dots[0].y) * 0.35;
      // each dot follows the previous dot
      for(let i=1;i<dots.length;i++){
        const prev = dots[i-1];
        dots[i].x += (prev.x - dots[i].x) * (0.25 + i*0.01);
        dots[i].y += (prev.y - dots[i].y) * (0.25 + i*0.01);
      }
      // apply styles
      for(let i=0;i<dots.length;i++){
        const o = 1 - i/(dots.length+2); // fade tail
        const scale = 1 - i*0.04;
        dots[i].el.style.transform = `translate(${dots[i].x}px, ${dots[i].y}px) translate(-50%,-50%) scale(${scale})`;
        dots[i].el.style.opacity = o;
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    // responsive: on resize reposition dots
    window.addEventListener('resize', () => {
      for(const d of dots){ d.x = window.innerWidth/2; d.y = window.innerHeight/2; }
    });