<script>
  (function(){
    window.addEventListener('load' , function(){
      const cfg = { key: 'webflow_utm', stamp: '_ts', maxDays: 30, debug:true };
      let params = new URLSearchParams(location. search);
      if (params.toString()) {
        localStorage.setItem(cfg.key, params.toString());
        localStorage.setItem(cfg.key+ cfg.stamp, Date.now());
        if (cfg.debug) console.log('UTM — enregistrés', params.toString());
      } else {
        const stored = localStorage.getItem(cfg.key);
        const ts = parseInt(localStorage.getItem( cfg.key+cfg.stamp) || '0', 10);
        if (stored && Date.now() - ts < cfg.maxDays*864e5) {
          params = new URLSearchParams(stored);
          if (cfg.debug) console.log('UTM — restaurés depuis localStorage');
        } else {
          if (stored) localStorage.removeItem(cfg.key +cfg.stamp), localStorage.removeItem(cfg.key );
          return;
        }
      }
      document.querySelectorAll('a[ href]').forEach(link => {
        try {
          const url = new URL(link.href, location.origin);
          params.forEach((v,k)=> url.searchParams.set(k,v));
          link.href = url.toString();
        } catch {}
      });
      if (cfg.debug) console.log('UTM présents sur les liens');
    });
  })();
</script>
