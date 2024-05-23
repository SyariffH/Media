const a = require('axios')
const c = require('cheerio')
let le = []
let da = await a.get('https://otakudesu.cloud/?s=date%20a&post_type=anime').then(r => r.data)
let $ = await c.load(da)
$('div#venkonten').find('ul > li').each((i, u) => {
  let na = $(u).find('a').html()
  let im = $(u).find('img').attr('src')
  let li = $(u).find('h2').html()
  let lik = $(li).attr('href')
  let ge = ""
  $(u).find('div[class="set"]').find('a').each((s, j) => {
    let ja = $(j).html().trim()
    ge += ja + ', '
  })
  ge = ge.replace(/, ([^,]*)$/, '$1')
  let ar = {judul: na, link: lik, image: im, genre: ge.trim()}
le.push(ar)
})


let html = '<li><img src="https://otakudesu.cloud/wp-content/uploads/2024/04/Date-A-Live-V.jpg" alt="Date A Live"/></li>';
/*le.forEach(item => {
  html += `<li>
  <img src=${item}alt=${item.judul}/></li>`;
  });
html += '</ul>';*/

document.getElementById('respon').innerHTML = html;
