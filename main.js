
  const links = document.querySelectorAll('a[href]')

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const url = this.getAttribute('href')

      // تجاهل الروابط اللي تبدأ بـ #
      if (url.startsWith('#')) return

      e.preventDefault()
      
      document.body.classList.add('loading')

      // شوية وقت لعرض الشريط
      setTimeout(() => {
        window.location.href = url
      }, 1000) // ← مدة التأخير بالمللي ثانية (1000 = ثانية واحدة)
    })
  })

  // إذا جيت للصفحة من رابط خارجي، خلينا نخلي الشريط يختفي بعد ثواني
  window.addEventListener('load', () => {
    const bar = document.getElementById('progress-bar')
    bar.style.width = '100%'
    setTimeout(() => {
      bar.style.width = '0%'
    }, 800)
  })

