import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const dataDoEvento = new Date("Apr 26, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasAteOEvento = Math.floor (distanciaAteOEvento / (1000 * 60 * 60 * 24));
    const horasAteOEvento = Math.floor ((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    console.log (diasAteOEvento)

}, 1000);