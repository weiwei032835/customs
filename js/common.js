//側邊欄收合
$(document).ready(function () {
  $('#sidebar-toggle').on('click', function () {
    $('.sidebar').toggleClass('collapsed');
  });
});

// Select2 with icon
$(document).ready(function () {
  // 初始化带有星星图标的 Select2
  $('.js-example-basic-single.select-with-icon').select2({
    width: '180px', // 设置宽度为 180 像素
    minimumResultsForSearch: Infinity, // 禁用搜索框
    templateResult: formatState,
    templateSelection: formatState
  });


  // 其他 Select2 初始化
  $('.js-example-basic-single:not(.select-with-icon)').select2({
    width: '180px', // 设置宽度为 180 像素
    minimumResultsForSearch: Infinity // 禁用搜索框
  });

  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var $state = $(
      '<span><i class="bi bi-star-fill"></i> ' + state.text + '</span>'
    );
    return $state;
  }
});

// Datepicker
$(document).ready(function () {
  $('#departure-date-start').datepicker({
    format: 'yyyy/mm/dd',
    autoclose: true
  }).on('show', function (e) {
    $('.datepicker').css('z-index', 1051); // 設置 z-index
  });

  $('#departure-date-end').datepicker({
    format: 'yyyy/mm/dd',
    autoclose: true
  }).on('show', function (e) {
    $('.datepicker').css('z-index', 1051); // 設置 z-index
  });
});

//收合內容
$(document).ready(function() {
  $('#toggle-btn').click(function() {
    $('#toggle-content').slideToggle();
    $(this).toggleClass('collapsed');
    if ($(this).hasClass('collapsed')) {
      $(this).html('展開內容 <i class="bi bi-chevron-down"></i>');
    } else {
      $(this).html('收起內容 <i class="bi bi-chevron-up"></i>');
    }
  });
});