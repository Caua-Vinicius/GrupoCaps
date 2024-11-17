$(document).ready(function () {

  //Configuracao do datepicker
  //Documentacao (https://github.com/uxsolutions/bootstrap-datepicker
  $('.filtros-gerais .input-daterange').datepicker({
    todayBtn: "linked",
    language: "pt-BR",
    orientation: "bottom left",
    keepEmptyValues: true
  });

  $("#input-start").attr("autocomplete", "off");
  $("#input-end").attr("autocomplete", "off");

  //Abrir Calendário com click no icone do calendario
  $('#datepicker > div:nth-child(1) > i').click(function () {
    $("#input-start").datepicker("show");
  });
  $('#datepicker > div:nth-child(2) > i').click(function () {
    $("#input-end").datepicker("show");
  });

  //Configuraçao de autocomplete
  //Documentação: https://select2.org/
  $('.autocomplete').select2({ language: "pt-BR" });

  //Configuracao da pesquisa no filtro
  $('#icon-search').click(function () {
    $('input[name="limitstart"]').val(0);
    $("form[id='form-padrao-filtro']").submit();
  });

  //Configuracao da limpeza da caixa de filtros
  //FIXME: tem coisas que podem nao funcionar. O ideal era dar um reset no formulario
  $('#icon-clean').click(function (e) {
    let $form = $('#form-padrao-filtro');
    $form.find('input:text, input:password, input:file, textarea').val('');
    $form.find('select').removeAttr('selected').val(0);
    $form.find('input:radio').removeAttr('checked').first().prop('checked', true)
    $form.find('input:checkbox').removeAttr('checked').first().prop('checked', true);
    $('input[name="limitstart"]').val(0);
    e.preventDefault();
    $("form[id='form-padrao-filtro']").submit();
  });

  //Configuracao dos filtros para atualizar o resultado apos mudarem
  $(".filtro-formulario").change(function () {
    $("form[id='form-padrao-filtro']").submit();
  });

  $(".back-top").hide();

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $('.back-top').fadeIn();
      } else {
        $('.back-top').fadeOut();
      }
    });
  });
});



var easing, e, pos;

$(function () {
  $(".back-top").on("click", function () {
    pos = $(window).scrollTop();
    $("body").css({
      "margin-top": -pos + "px",
      "overflow-y": "scroll",
    });
    $(window).scrollTop(0);
    $("body").css("transition", "all 1s ease");
    $("body").css("margin-top", "0");
    $("body").on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function () {
      $("body").css("transition", "none");
    });
  });


  $.fn.solicitarLogin = function () {
    $(".back-top").click();
    $("#card-login").addClass("show");
    $("#usuario").focus();
    pos = $(window).scrollTop();
    $("body").css({
      "margin-top": -pos + "px",
      "overflow-y": "scroll",
    });
    $(window).scrollTop(0);
    $("body").css("transition", "all 1s ease");
    $("body").css("margin-top", "0");
    $("body").on("webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd", function () {
      $("body").css("transition", "none");
    });
  };
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM totalmente carregado e analisado");

  const lista = document.getElementById("lista");
  if (!lista) {
    console.error("Elemento com ID 'lista' não encontrado");
    return;
  }

  const headers = lista.getElementsByTagName("h2");
  if (headers.length === 0) {
    console.error("Nenhum elemento <h2> encontrado dentro de 'lista'");
    return;
  }

  for (let header of headers) {
    const words = header.innerText.split(" ");
    header.innerHTML = words.join("<br>");
  }

  console.log("Quebras de linha adicionadas aos elementos <h2>");
});

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');

  // Verifica se o índice está dentro do limite
  if (index >= dots.length) index = 0;
  if (index < 0) index = dots.length - 1;

  currentSlide = index;

  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function setSlide(index) {
  showSlide(index);
}

function autoSlide() {
  const slides = document.querySelectorAll('.slide');

  // Incrementa o índice ou reinicia para o primeiro slide
  currentSlide = (currentSlide + 1) % slides.length;

  showSlide(currentSlide);
}

// Inicia o carrossel com alternância automática
setInterval(autoSlide, 8000);