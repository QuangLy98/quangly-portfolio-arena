// JavaScript Document
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});

$('#banner').owlCarousel({
loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
autoplayTimeout:5000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true,	// cho xuất hiện bộ nút tới lui 
})

$('.counter').countUp();

  AOS.init();


  const ctx = document.getElementById('expenseChart').getContext('2d');
  const expenseChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Manufacturing', 'Logistics & Supply chain', 'Retails', 'Education', 'Professional services'],
      datasets: [{
        data: [70, 10, 10, 5, 5],
        backgroundColor: ['#7ca30d', '#bee635', '#ccf049', '#e7f99d', '#f3fccb'],
        borderWidth: 0,
      }]
    },
    options: {
      cutout: '80%',
      responsive: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true
        }
      }
    }
  });