const dados = [];

dados[0] = "Aquaplus começou em meados dos anos 1990, quando um grupo de empreendedores visionários se uniu para abordar a  crescente preocupação com a qualidade da água potável e o uso excessivo de plástico descartável."

dados[1] = "No ano de 1995, a Aquaplus foi fundada com a missão de fornecer água potável de alta qualidade e sustentável para famílias e empresas.O primeiro produto da marca foi um bebedouro de água que utilizava a  tecnologia de purificação avançada, garantindo que a água fornecida fosse livre de impurezas e com um sabor excepcional.</p>"

dados[2] = "Dois anos após sua fundação, a Aquaplus assumiu um compromisso firme com a sustentabilidade.<br>  A empresa começou a produzir bebedouros que utilizavam filtros de alta eficiência, reduzindo a necessidade de garrafas de plástico descartável.Além disso, a marca implementou programas de reciclagem e redução do consumo de água em suas instalações."

dados[3] = "No início dos anos 2000, a Aquaplus  expandiu seus negócios para o mercado internacional,  estabelecendo parcerias com distribuidores e empresas em todo o mundo.Sua reputação de qualidade e sustentabilidade a  ajudou a crescer rapidamente, conquistando a confiança de consumidores e empresas em diversos países.</p>"

dados[4] = "A Aquaplus continuou a investir em pesquisa e desenvolvimento, resultando em bebedouros de última geração.Esses produtos não apenas purificavam a água, mas também ofereciam recursos como controle de temperatura e opções de sabores naturais, tornando a experiência de beber água mais agradável e personalizada."

dados[5] = "Com o aumento da conscientização ambiental, a Aquaplus intensificou seus esforços para reduzir ainda mais seu impacto  no meio ambiente.A empresa introduziu bebedouros de água que eram fabricados com materiais reciclados e promovia  campanhas para incentivar o consumo responsável de água."

dados[6] = "Atualmente, a Aquaplus é reconhecida globalmente como uma líder na indústria de purificação de água.A marca continua  a inovar, desenvolvendo soluções de água cada vez mais avançadas e sustentáveis.Seu compromisso com a qualidade e o  meio ambiente a tornou uma escolha preferida para famílias e empresas que buscam água saudável e sustentável.<br> A história da marca Aquaplus é um exemplo notável de como uma empresa pode crescer e prosperar ao combinar inovação, qualidade e responsabilidade ambiental em seu núcleo, atendendo às necessidades da sociedade e do planeta."


document.querySelectorAll('.btn')[0].addEventListener('click', () => {
 document.querySelector('.nr').innerHTML = '<u><b>1990 - AguaPlus</u></b><br><br>';
 document.querySelector('.item').innerHTML = dados[0];
 // document.querySelectorAll('.btn')[0].style.color='red';
})

document.querySelectorAll('.btn')[1].addEventListener('click', () => {
 document.querySelector('.nr').innerHTML = '<u><b>1995 - O Início</u></b><br><br>';
 document.querySelector('.item').innerHTML = dados[1];
})

document.querySelectorAll('.btn')[2].addEventListener('click', () => {
 document.querySelector('.nr').innerHTML = '<u><b>1997 - Compromisso com a Sustentabilidade</u></b><br><br>';
 document.querySelector('.item').innerHTML = dados[2];
})

document.querySelectorAll('.btn')[3].addEventListener('click', () => {
 document.querySelector('.nr').innerHTML = '<u><b>2000 - Expansão Global</u></b><br><br>';
 document.querySelector('.item').innerHTML = dados[3];
})

document.querySelectorAll('.btn')[4].addEventListener('click', () => {
 document.querySelector('.nr').innerHTML = '<u><b>2010 - Inovação Tecnológica</u></b><br><br>';
 document.querySelector('.item').innerHTML = dados[4];
})

document.querySelectorAll('.btn')[5].addEventListener('click', () => {
 document.querySelector('.nr').innerHTML = '<u><b>2020 - Responsabilidade Ambiental</u></b><br><br>';
 document.querySelector('.item').innerHTML = dados[5];
})

document.querySelectorAll('.btn')[6].addEventListener('click', () => {
 document.querySelector('.nr').innerHTML = '<u><b>2023 - O Futuro</u></b><br><br>';
 document.querySelector('.item').innerHTML = dados[6];
})
