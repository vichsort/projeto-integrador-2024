import './news-item.js';

const app = document.querySelector('#app');
app.innerHTML = `
  <div>

  <news-item
    tag="Marte"
    title="NASA pode ter acidentalmente acabado com a vida em Marte: a surpreendente teoria de um astrobiólogo alemão"
    description="Um astrobiólogo alemão levanta a hipótese de que experimentos conduzidos pela NASA durante as missões Viking, nos anos 1970, podem ter destruído inadvertidamente sinais de vida em Marte. A teoria sugere que processos usados para procurar microrganismos podem ter eliminado formas de vida simples presentes no planeta."
    date="26/12/2024"
    timeAgo="3"
    image="https://services.meteored.com/img/article/quando-verranno-inviati-i-primi-astronauti-su-marte-1728549640282_1024.jpg"
    url="https://www.tempo.com/noticias/ciencia/nasa-pode-ter-acidentalmente-acabado-com-a-vida-em-marte-a-surpreendente-teoria-de-um-astrobiologo-alemao.html"
  ></news-item>
  <news-item
    tag="Marte"
    title="Meteorito encontrado na Terra pode trazer pistas sobre água e vida em Marte"
    description="Cientistas analisam um meteorito marciano encontrado na Terra que contém indícios de interações com água no passado. As descobertas podem ajudar a entender melhor a presença de água líquida em Marte e seu papel na possível existência de vida no planeta vermelho."
    date="26/12/2024"
    timeAgo="3"
    image="https://img.odcdn.com.br/wp-content/uploads/2023/05/meteorito-marte.jpg"
    url="https://www.cnnbrasil.com.br/tecnologia/meteorito-encontrado-na-terra-pode-ter-novas-pistas-sobre-agua-e-vida-em-marte/"
  ></news-item>
  <news-item
    tag="Rovers"
    title="Especialista explica evidências de vida encontradas por robô da NASA em Marte"
    description="Pesquisadores discutem as recentes descobertas feitas por rovers da NASA, que incluem compostos orgânicos e padrões geológicos que podem ser sinais de atividade biológica antiga em Marte. A análise detalhada busca entender se essas evidências realmente indicam vida."
    date="26/12/2024"
    timeAgo="3"
    image="https://s2-g1.glbimg.com/KmErHixcxbpyBYOi6VT-JwlwNkY=/0x0:1648x1200/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/3/b/EwANaPQaymqayTuaKRTg/1-pia26368-perseverance-finds-a-rock-with-leopard-spots.png"
    url="https://g1.globo.com/ciencia/noticia/2024/08/01/especialista-explica-o-que-sao-as-evidencias-de-vida-encontradas-por-robo-da-nasa-em-marte.ghtml"
  ></news-item>
  <news-item
    tag="Marte"
    title="É possível que os seres humanos vivam em Marte?"
    description="Estudos exploram os desafios e possibilidades de colonização de Marte. Questões como radiação, falta de água acessível e temperaturas extremas são obstáculos, mas avanços tecnológicos podem abrir caminho para futuras missões habitadas no planeta."
    date="26/12/2024"
    timeAgo="3"
    image="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01_new-life-on-mars-by-robert-murray--2001--the-mars-society-.jpg?w=1900&h=1268"
    url="https://www.google.com/search?sca_esv=08af81acf73058fc&rlz=1C1GCEU_pt-BRBR1128BR1128&sxsrf=ADLYWIIpYsK-QieihxL6k9YcACQ_PW0FvA:1733849909264&q=noticias+sobre+vida+em+marte&tbm=nws&source=lnms&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmiLmQjKZFCfiSaLppBAFpKn7pkdRGmNzWgJ9O1TQYfAaWqm2ulAbc2f9fKOBd0jRRjfS9t9VXmefzQ8-v9pIjXL0QFvqCKwxZlaelgVfZ-gZSgqDSyXOp6HsBH03wWsw9RGeEmJq1KvvpdGErmVbKU5e9gtjjGLNY1Pvu3TNBBdyWrobZuX325PN4__2S7Mi4z6jT0Eg&sa=X&ved=2ahUKEwjNx72f1p2KAxVLr5UCHWUDArsQ0pQJegQIExAB&biw=1920&bih=945&dpr=1"
  ></news-item>
  <news-item
    tag="Marte"
    title="Marte ainda guarda grandes surpresas, diz astrobióloga"
    description="Uma astrobióloga afirma que as descobertas recentes em Marte são apenas o começo. Segundo ela, o planeta ainda reserva mistérios que podem revolucionar nossa compreensão sobre a vida fora da Terra e o próprio passado do Sistema Solar."
    date="26/12/2024"
    timeAgo="3"
    image="https://s2-oglobo.glbimg.com/EXV1VDEXuMENhI6WSLCmh5l15do=/0x0:664x664/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/r/D/C1daUpR6a38kDaTBQIwA/31589a8-888958287-af-inherorbit-008-c.jpg"
    url="https://oglobo.globo.com/mundo/clima-e-ciencia/noticia/2024/08/04/marte-ainda-tem-algumas-grandes-surpresas-para-nos-diz-astrobiologa-sobre-vida-fora-da-terra.ghtml"
  ></news-item>
  <news-item
    tag="Marte"
    title="NASA encontra matéria orgânica no planeta vermelho"
    description="O rover Perseverance identificou matéria orgânica em amostras de solo marciano, um avanço significativo na busca por sinais de vida. Esses compostos podem ter origem biológica ou química, e sua análise detalhada será crucial para determinar sua natureza."
    date="26/12/2024"
    timeAgo="3"
    image="https://classic.exame.com/wp-content/uploads/2021/10/marte-1.jpg?ims=750x/filters:quality(85):format(webp)"
    url="https://exame.com/ciencia/vida-em-marte-nasa-encontra-materia-organica-no-planeta-vermelho/"
  ></news-item>
  <news-item
    tag="Rovers"
    title="Perseverance encontra rocha com sinais de possível vida em Marte"
    description="A NASA anunciou que o rover Perseverance descobriu uma rocha contendo estruturas químicas que podem ser associadas a processos biológicos. A análise do material reforça a hipótese de que Marte pode ter abrigado vida no passado."
    date="26/12/2024"
    timeAgo="3"
    image="https://static.euronews.com/articles/stories/08/63/66/64/1920x1080_cmsv2_ec0c07f0-b3b9-547d-853e-e6d96b142f54-8636664.jpg"
    url="https://pt.euronews.com/next/2024/08/07/nave-perseverance-da-nasa-encontra-rocha-com-sinais-de-possivel-vida-em-marte"
  ></news-item>
  <news-item
    tag="Rovers"
    title="Descobertas surpreendentes do Curiosity Rover em Marte"
    description="O rover Curiosity revelou novas evidências de que Marte teve condições habitáveis no passado. Amostras de rochas e sedimentos indicam que lagos e rios existiram no planeta, aumentando as chances de que vida microbiana tenha se desenvolvido."
    date="26/12/2024"
    timeAgo="3"
    image="https://cdn.oantagonista.com/uploads/2024/10/Curiosity-Rover_1729224264944.jpg"
    url="https://oantagonista.com.br/entretenimento/descobertas-surpreendentes-do-curiosity-rover-em-marte/"
  ></news-item>
  <news-item
    tag="Rovers"
    title="Perseverance confirma que houve um lago em Marte no passado"
    description="A NASA confirmou que a cratera Jezero, explorada pelo rover Perseverance, abrigou um lago há bilhões de anos. Os sedimentos encontrados na região indicam um ambiente favorável à vida microbiana durante esse período."
    date="26/12/2024"
    timeAgo="3"
    image="https://img.odcdn.com.br/wp-content/uploads/2021/02/perseverance_jezero_passado-1024x576.jpg"
    url="https://www.tempo.com/noticias/ciencia/espaco-o-rover-perseverance-confirma-houve-um-lago-em-marte-no-passado.html"
  ></news-item>
  <news-item
    tag="Marte"
    title="Curiosity registra imagens de um dia em Marte"
    description="O rover Curiosity capturou imagens fascinantes de um dia em Marte, mostrando o céu avermelhado e o terreno rochoso. As fotos ajudam a entender melhor as condições climáticas e geológicas do planeta."
    date="26/12/2024"
    timeAgo="3"
    image="https://s2-galileu.glbimg.com/_r1IkUC7kTzb4st1o2EFeTIW77E=/0x0:1024x1024/600x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_fde5cd494fb04473a83fa5fd57ad4542/internal_photos/bs/2023/v/y/1R7VJeQu2DBk0Waz824Q/dia-em-marte1.gif"
    url="https://revistagalileu.globo.com/ciencia/espaco/noticia/2023/12/rover-curiosity-da-nasa-registra-imagens-de-um-dia-em-marte-confira.ghtml"
  ></news-item>
  <news-item
    tag="Marte"
    title="Panorama em 360º da Perseverance em Marte"
    description="A NASA divulgou um panorama em 360º capturado pelo rover Perseverance, oferecendo uma visão detalhada da paisagem marciana. As imagens mostram formações rochosas e dunas, ajudando cientistas a planejar futuras explorações."
    date="26/12/2024"
    timeAgo="3"
    image="https://i.ytimg.com/vi/5jq9b4FrWCg/maxresdefault.jpg"
    url="https://www.cnnbrasil.com.br/tecnologia/nasa-divulga-panorama-em-360-da-rover-perseverance-em-marte-veja-as-imagens/"
  ></news-item>
  <news-item
    tag="Rovers"
    title="Rover encontra intrigante sinal de possível vida passada em Marte"
    description="Uma descoberta intrigante do rover Perseverance aponta para padrões químicos que podem ser indícios de vida passada em Marte. A análise desses dados pode fornecer informações cruciais sobre a história biológica do planeta."
    date="26/12/2024"
    timeAgo="3"
    image="https://img.odcdn.com.br/wp-content/uploads/2024/05/oxido-de-manganes-em-Marte.jpg"
    url="https://www.cnnbrasil.com.br/tecnologia/meteorito-encontrado-na-terra-pode-ter-novas-pistas-sobre-agua-e-vida-em-marte/"
  ></news-item>
  
  </div>
`;


/* loader ------ */

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader")
  })
})