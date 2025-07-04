document.addEventListener('DOMContentLoaded', () => {
  // Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const overlay = document.getElementById('overlay');

  if (menuToggle && navMenu && overlay) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('show');
      document.body.classList.toggle('menu-open', isOpen);
      overlay.classList.toggle('hidden', !isOpen);

      if (isOpen) {
        navMenu.style.zIndex = '10000';
        const container = document.querySelector('.container');
        if (container) container.style.zIndex = '5';
      } else {
        navMenu.style.zIndex = '';
        const container = document.querySelector('.container');
        if (container) container.style.zIndex = '10';
      }
    });

    overlay.addEventListener('click', () => {
      navMenu.classList.remove('show');
      document.body.classList.remove('menu-open');
      overlay.classList.add('hidden');
      navMenu.style.zIndex = '';
      const container = document.querySelector('.container');
      if (container) container.style.zIndex = '10';
    });

    // Close menu when a navigation link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { // Only on mobile
          navMenu.classList.remove('show');
          document.body.classList.remove('menu-open');
          overlay.classList.add('hidden');
          navMenu.style.zIndex = '';
          const container = document.querySelector('.container');
          if (container) container.style.zIndex = '10';
        }
      });
    });

    // Toggle dropdown on mobile
    const dropdowns = navMenu.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const content = dropdown.querySelector('.dropdown-content');
          if (content) {
            content.style.display = content.style.display === 'flex' ? 'none' : 'flex';
          }
        }
      });
    });
  }


  // Canvas Animation Setup
  const canvas = document.getElementById('bgCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();

    const page = document.body.dataset.page || 'home';

    // ============================================================================================================
    // ================================    ANIMATIONS  ============================================================

    // Home Page - Nebula Animation
    if (page === 'home') {
      let hue = 0;
      const stars = [];

      // Initialize stars
      for (let i = 0; i < 100; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2
        });
      }

      function drawNebula() {
        // Clear with semi-transparent black
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Create nebula gradient
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, canvas.width / 2
        );
        gradient.addColorStop(0, `hsla(${hue}, 70%, 50%, 0.8)`);
        gradient.addColorStop(1, `hsla(${hue + 60}, 70%, 20%, 0.2)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw stars
        ctx.fillStyle = '#fff';
        stars.forEach(star => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });

        hue = (hue + 0.5) % 360;
        requestAnimationFrame(drawNebula);
      }

      drawNebula();
    }

    // Weekly Page - Swarm Animation
    else if (page === 'weekly') {
      const particles = [];

      // Initialize particles
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          color: `hsl(${Math.random() * 360}, 70%, 50%)`
        });
      }

      // Mouse interaction
      canvas.addEventListener('mousemove', (e) => {
        particles.forEach(p => {
          const dx = e.clientX - p.x;
          const dy = e.clientY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            p.vx += dx / 100;
            p.vy += dy / 100;
          }
        });
      });

      function drawSwarm() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          // Update position
          p.x += p.vx;
          p.y += p.vy;

          // Bounce off walls
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

          // Apply friction
          p.vx *= 0.98;
          p.vy *= 0.98;
        });

        requestAnimationFrame(drawSwarm);
      }

      drawSwarm();
    }

    // Gallery Page - Terrain Animation
    else if (page === 'gallery') {
      let t = 0;

      function drawTerrain() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 10) {
          const y = canvas.height / 2 + Math.sin(x * 0.01 + t) * 50 + Math.cos(x * 0.02 + t) * 30;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#990bbf');
        gradient.addColorStop(1, 'rgba(153, 11, 191, 0.1)');
        ctx.fillStyle = gradient;
        ctx.fill();

        t += 0.03;
        requestAnimationFrame(drawTerrain);
      }

      drawTerrain();

      // Gallery modal functions
      window.openModal = function(src, type) {
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modalContent');
        if (!modal || !modalContent) return;
        modal.style.display = "block";
        if (type === "image") {
          modalContent.innerHTML = `<img src="${src}" alt="Modal Image" style="max-width: 100%; max-height: 80vh;">`;
        } else if (type === "video") {
          modalContent.innerHTML = `<iframe src="${src}" width="100%" height="80vh" frameborder="0" allowfullscreen></iframe>`;
        }
      };

      window.closeModal = function() {
        const modal = document.getElementById('modal');
        if (modal) {
          modal.style.display = "none";
          const modalContent = document.getElementById('modalContent');
          if (modalContent) modalContent.innerHTML = '';
        }
      };
    }

    // Leaders Page - Aura Animation
    else if (page === 'leaders') {
      function drawAura() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < 5; i++) {
          const radius = 50 + i * 50 + Math.sin(Date.now() * 0.001 + i) * 20;
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${240 - i * 30}, 70%, 50%, ${0.8 - i * 0.15})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        requestAnimationFrame(drawAura);
      }

      drawAura();
    }

    // Registration Page - Ripples Animation
    else if (page === 'registration') {
      const ripples = [];

      function drawRipples() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Add new ripples randomly
        if (Math.random() > 0.7) {
          ripples.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 0
          });
        }

        // Draw and update ripples
        ripples.forEach((r, index) => {
          ctx.beginPath();
          ctx.arc(r.x, r.y, r.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(161, 23, 164, ${0.5 - r.size / 200})`;
          ctx.fill();
          r.size += 2;
          if (r.size > 200) ripples.splice(index, 1);
        });

        requestAnimationFrame(drawRipples);
      }

      drawRipples();
    }

    // Contact Page - Spiral Animation
    else if (page === 'contact') {
      let angle = 0;

      function drawSpiral() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(angle);

        for (let i = 0; i < 10; i++) {
          const r = i * 20 + Math.sin(angle + i) * 10;
          const x = r * Math.cos(i * 0.3);
          const y = r * Math.sin(i * 0.3);
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${angle * 10 + i * 36}, 70%, 50%)`;
          ctx.fill();
        }

        ctx.restore();
        angle += 0.02;
        requestAnimationFrame(drawSpiral);
      }

      drawSpiral();
    }

    // Testimonies Page - Wave Animation
    else if (page === 'testimonies') {
      function drawWave() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.moveTo(0, canvas.height);
          for (let x = 0; x <= canvas.width; x += 10) {
            const y = canvas.height - (Math.sin(x * 0.02 + Date.now() * 0.001 + i) * 50 + 50 * i);
            ctx.lineTo(x, y);
          }
          ctx.lineTo(canvas.width, canvas.height);
          ctx.closePath();
          ctx.fillStyle = `rgba(161, 23, 164, ${0.3 - i * 0.1})`;
          ctx.fill();
        }

        requestAnimationFrame(drawWave);
      }

      drawWave();
    }

    // Offerings Page - Orbit Animation
    else if (page === 'offerings') {
      const orbits = [];

      // Initialize orbits
      for (let i = 0; i < 5; i++) {
        orbits.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          radius: 50 + i * 30,
          angle: Math.random() * Math.PI * 2
        });
      }

      function drawOrbit() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        orbits.forEach(orbit => {
          const x = orbit.x + Math.cos(orbit.angle) * orbit.radius;
          const y = orbit.y + Math.sin(orbit.angle) * orbit.radius;
          ctx.beginPath();
          ctx.arc(x, y, 5, 0, Math.PI * 2);
          ctx.fillStyle = '#fff';
          ctx.fill();
          orbit.angle += 0.02;
        });

        requestAnimationFrame(drawOrbit);
      }

      drawOrbit();
    }

    // Prayer Requests Page - Pulse Animation
    else if (page === 'prayer-requests') {
      function drawPulse() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const size = Math.sin(Date.now() * 0.002) * 20 + 50;
        const gradient = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 0,
          canvas.width / 2, canvas.height / 2, size
        );
        gradient.addColorStop(0, 'rgba(153, 11, 191, 0.8)');
        gradient.addColorStop(1, 'rgba(153, 11, 191, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        requestAnimationFrame(drawPulse);
      }

      drawPulse();
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      // Reinitialize stars for home page after resize
      if (page === 'home') {
        stars.length = 0;
        for (let i = 0; i < 100; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2
          });
        }
      }
    });
  }
});
