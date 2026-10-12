/**
 * Ngân hàng câu hỏi gợi ý cho "Xưởng tạo quiz".
 * Mỗi chủ đề có 10 câu; bấm "Gợi ý nhanh" sẽ rút ngẫu nhiên 1 câu trong chủ đề đó.
 *
 * Cấu trúc một câu: { emoji, q, options: [4 đáp án], answer: 0-3, note }
 * `answer` chỉ là đáp án mẫu — chủ quiz sẽ tự chọn lại đáp án đúng của mình.
 */
window.QUESTION_TEMPLATES = [
  {
    id: 'food',
    label: '🍜 Món ăn',
    questions: [
      { emoji: '🍜', q: 'Món ăn mình khó cưỡng nhất là gì?', options: ['Bún bò / phở nóng hổi', 'Trà sữa full topping', 'Đồ nướng cay xé', 'Bánh ngọt kem béo ngậy'], answer: 0, note: 'Ai cũng có một món chân ái 😌' },
      { emoji: '🌙', q: 'Đói lúc nửa đêm, mình sẽ làm gì?', options: ['Nấu mì gói', 'Đặt đồ ăn khuya', 'Lục tủ lạnh tìm đồ', 'Cố ngủ cho quên đói'], answer: 0, note: 'Đêm khuya là lúc bụng biểu tình mạnh nhất 🌙' },
      { emoji: '🌶️', q: 'Mình ăn cay ở mức nào?', options: ['Không ăn được cay', 'Cay nhẹ thôi', 'Cay vừa, đổ mồ hôi tí', 'Cay cấp độ thử thách'], answer: 2, note: 'Cay hay không cũng đều đáng yêu 🔥' },
      { emoji: '🧋', q: 'Order trà sữa, mình thường chọn mức đường nào?', options: ['100% ngọt', '70% ngọt', '50% ngọt', 'Không đường cho khỏe'], answer: 1, note: 'Mức đường tiết lộ độ “ngọt” của tâm hồn 🍯' },
      { emoji: '🍰', q: 'Món tráng miệng mình mê nhất?', options: ['Bánh flan', 'Kem lạnh', 'Chè các loại', 'Bánh kem dâu'], answer: 3, note: 'Bụng nào cũng có một góc dành riêng cho đồ ngọt 🍓' },
      { emoji: '🍳', q: 'Bữa sáng lý tưởng của mình là gì?', options: ['Bánh mì trứng', 'Xôi nóng', 'Cà phê, không ăn gì', 'Ngủ nướng, bỏ bữa sáng'], answer: 0, note: 'Một ngày tốt lành bắt đầu từ bữa sáng ngon 🥖' },
      { emoji: '🙅', q: 'Món nào mình “nhìn thôi đã lắc đầu”?', options: ['Sầu riêng', 'Mắm tôm', 'Rau đắng', 'Nội tạng'], answer: 1, note: 'Ai cũng có một món “kỵ” riêng 🤢' },
      { emoji: '🍕', q: 'Đi ăn cùng bạn bè, mình hay chọn kiểu quán nào?', options: ['Quán lẩu nướng', 'Quán cà phê chill', 'Quán vỉa hè bình dân', 'Nhà hàng sang xịn'], answer: 2, note: 'Quán vỉa hè mới là nơi có hương vị thật sự 🍢' },
      { emoji: '🥤', q: 'Thức uống mình uống nhiều nhất trong ngày?', options: ['Cà phê', 'Trà sữa', 'Nước lọc', 'Nước ngọt có ga'], answer: 0, note: 'Thức uống quen thuộc là nguồn năng lượng mỗi ngày ⚡' },
      { emoji: '👩‍🍳', q: 'Về khoản nấu ăn, mình thuộc kiểu nào?', options: ['Đầu bếp tại gia', 'Chỉ biết nấu mì và chiên trứng', 'Chuyên đặt đồ ăn ngoài', 'Biết nấu nhưng lười'], answer: 3, note: 'Biết nấu mà lười cũng là một loại tài năng 😆' }
    ]
  },
  {
    id: 'personality',
    label: '💖 Tính cách',
    questions: [
      { emoji: '💖', q: 'Nếu nói về tính cách, mình thuộc kiểu nào?', options: ['Dịu dàng, nhẹ nhàng', 'Vui vẻ, hơi ngáo ngơ', 'Điềm tĩnh, ít nói', 'Năng động, nhiều năng lượng'], answer: 1, note: 'Mỗi người đều có nét riêng đáng yêu 🌷' },
      { emoji: '🎤', q: 'Trong buổi tiệc đông người, mình thường…', options: ['Làm trung tâm của cuộc vui', 'Ngồi góc nói chuyện với vài người', 'Lẳng lặng ngắm mọi người', 'Tìm cớ về sớm'], answer: 1, note: 'Hướng nội hay hướng ngoại đều có sức hút riêng ✨' },
      { emoji: '😤', q: 'Khi bực mình, mình phản ứng thế nào?', options: ['Nói thẳng ra luôn', 'Im lặng giận một mình', 'Kể cho bạn thân nghe', 'Ăn gì đó cho nguôi'], answer: 3, note: 'Cách xả giận tiết lộ rất nhiều điều 🙈' },
      { emoji: '⏰', q: 'Mình đi hẹn thường như thế nào?', options: ['Đến sớm 15 phút', 'Đúng giờ tuyệt đối', 'Trễ 5–10 phút “sắp tới rồi”', 'Phải nhắn nhắc mới chịu đi'], answer: 2, note: '“Sắp tới rồi” là câu nói huyền thoại 😂' },
      { emoji: '💸', q: 'Về chuyện tiêu tiền, mình là người…', options: ['Tiết kiệm từng đồng', 'Cân đối thu chi hợp lý', 'Thích gì mua nấy', 'Cuối tháng mới biết hết tiền'], answer: 3, note: 'Ví tiền mỏng nhưng tâm hồn dày 💰' },
      { emoji: '🥹', q: 'Điều gì dễ khiến mình xúc động nhất?', options: ['Một bộ phim cảm động', 'Một lời quan tâm bất ngờ', 'Khoảnh khắc đoàn tụ', 'Những kỷ niệm cũ'], answer: 1, note: 'Trái tim mềm mại là một món quà 💞' },
      { emoji: '🧩', q: 'Gặp vấn đề khó, mình sẽ…', options: ['Bình tĩnh phân tích từng bước', 'Hỏi ý kiến bạn bè', 'Trì hoãn, mai tính', 'Làm theo cảm hứng'], answer: 0, note: 'Cách giải quyết vấn đề nói lên con người bạn 🧠' },
      { emoji: '🎭', q: 'Người ngoài nhìn vào, thường nghĩ mình là người…', options: ['Lạnh lùng, khó gần', 'Hiền lành, dễ thương', 'Vui tính, hoà đồng', 'Bí ẩn, khó đoán'], answer: 2, note: 'Ấn tượng đầu tiên đôi khi khác hẳn thực tế 😏' },
      { emoji: '🛌', q: 'Mình là cú đêm hay chim sớm?', options: ['Chim sớm, dậy từ tinh mơ', 'Cú đêm chính hiệu', 'Tuỳ hôm', 'Ngủ lúc nào cũng được'], answer: 1, note: 'Đêm về là lúc năng lượng bùng nổ 🦉' },
      { emoji: '🤝', q: 'Trong tình bạn, mình là người…', options: ['Luôn lắng nghe', 'Hay bày trò vui', 'Luôn bênh bạn vô điều kiện', 'Nói thật, thẳng thắn'], answer: 0, note: 'Một người bạn tốt là báu vật 🫶' }
    ]
  },
  {
    id: 'habit',
    label: '🧠 Thói quen',
    questions: [
      { emoji: '🧠', q: 'Thói quen nào mình hay làm nhất?', options: ['Nghe nhạc và mơ màng', 'Ăn vặt khi làm việc', 'Ngủ muộn rồi than mệt', 'Cười vì chuyện chẳng đâu'], answer: 2, note: 'Thói quen ngố cũng rất đáng yêu 😊' },
      { emoji: '📱', q: 'Việc đầu tiên mình làm sau khi thức dậy?', options: ['Check điện thoại', 'Vệ sinh cá nhân ngay', 'Nằm thêm 10 phút nữa', 'Uống nước hoặc cà phê'], answer: 0, note: 'Chiếc điện thoại là người bạn buổi sáng 📲' },
      { emoji: '🎧', q: 'Khi đi trên đường, mình thường…', options: ['Đeo tai nghe nghe nhạc', 'Ngắm cảnh xung quanh', 'Lướt điện thoại', 'Mải nghĩ vẩn vơ'], answer: 0, note: 'Âm nhạc là bạn đồng hành mỗi chuyến đi 🎶' },
      { emoji: '📅', q: 'Với deadline, mình thuộc nhóm nào?', options: ['Làm xong sớm từ lâu', 'Làm đúng hạn', 'Cận giờ mới bắt đầu', 'Xin gia hạn thêm'], answer: 2, note: 'Deadline là động lực tuyệt vời nhất 🔥' },
      { emoji: '🛍️', q: 'Mình hay mua sắm online vào lúc nào?', options: ['Đêm khuya lúc không ngủ được', 'Ngày sale lớn', 'Khi buồn chán', 'Ít khi mua sắm'], answer: 0, note: 'Giỏ hàng đầy là niềm vui nho nhỏ 🛒' },
      { emoji: '📸', q: 'Thói quen chụp ảnh của mình?', options: ['Chụp đồ ăn trước khi ăn', 'Selfie liên tục', 'Chụp cảnh đẹp', 'Hiếm khi chụp'], answer: 0, note: 'Đồ ăn phải “ăn” bằng mắt trước 📷' },
      { emoji: '☕', q: 'Mình thích làm việc ở đâu nhất?', options: ['Quán cà phê', 'Phòng riêng ở nhà', 'Thư viện yên tĩnh', 'Nằm trên giường luôn'], answer: 3, note: 'Giường là văn phòng tiện nghi nhất 🛏️' },
      { emoji: '🧹', q: 'Phòng của mình thường trong tình trạng nào?', options: ['Gọn gàng, ngăn nắp', 'Bừa bộn nhưng có trật tự riêng', 'Chỉ dọn khi có khách', 'Dọn dẹp thường xuyên mỗi cuối tuần'], answer: 1, note: 'Bừa bộn có hệ thống mới là nghệ thuật 🎨' },
      { emoji: '🏃', q: 'Thói quen vận động của mình?', options: ['Tập đều mỗi ngày', 'Thỉnh thoảng đi bộ', 'Chủ yếu ngồi và nằm', 'Có kế hoạch nhưng chưa bắt đầu'], answer: 3, note: 'Thứ Hai tuần sau sẽ bắt đầu, hứa luôn! 💪' },
      { emoji: '💤', q: 'Mình thường đi ngủ lúc mấy giờ?', options: ['Trước 22h', 'Khoảng 23h', 'Sau nửa đêm', 'Khi nào buồn ngủ thì ngủ'], answer: 2, note: 'Ngủ sớm là dự định đẹp nhất mỗi tối 🌙' }
    ]
  },
  {
    id: 'quote',
    label: '💬 Câu nói',
    questions: [
      { emoji: '💬', q: 'Câu nói thân thuộc nhất của mình là gì?', options: ['“Ủa alo?”', '“Để mai tính”', '“Đói quá à”', '“Hong sao đâu”'], answer: 0, note: 'Câu cửa miệng tiết lộ nhiều điều lắm 💫' },
      { emoji: '😴', q: 'Sáng thứ Hai, mình hay thốt lên câu gì?', options: ['“Sao cuối tuần ngắn thế?”', '“Cho xin 5 phút nữa thôi”', '“Lại một tuần nữa rồi”', '“Cố lên nào!”'], answer: 1, note: 'Thứ Hai là thử thách của mọi người 😵' },
      { emoji: '🍽️', q: 'Khi bạn rủ đi ăn, mình trả lời thế nào?', options: ['“Đi luôn!”', '“Ăn gì cũng được”', '“Để xem đã”', '“Mình đang giảm cân…”'], answer: 1, note: '“Gì cũng được” là câu khó nhất để chiều 🤔' },
      { emoji: '🙄', q: 'Khi ai đó nói chuyện vô lý, mình sẽ nói…', options: ['“Thật hả trời?”', '“Ủa alo?”', '“Ừ ừ”', '“Okie luôn”'], answer: 0, note: 'Phản ứng nhanh là thương hiệu cá nhân 😆' },
      { emoji: '🥺', q: 'Câu mình hay nói khi muốn nhờ vả?', options: ['“Giúp mình với nha”', '“Làm ơn đi mà”', '“Cho mình xin chút xíu”', '“Bạn là nhất!”'], answer: 3, note: 'Nịnh nhẹ một chút là có ngay sự giúp đỡ 🙏' },
      { emoji: '😅', q: 'Khi làm sai, mình thường nói…', options: ['“Mình xin lỗi”', '“Ủa vậy hả?”', '“Hông phải lỗi của mình”', '“Lần sau mình sẽ cẩn thận”'], answer: 1, note: 'Biết sai và sửa mới là điều đáng quý 🌱' },
      { emoji: '🤣', q: 'Khi buồn cười, mình thường phản ứng thế nào?', options: ['Cười không thành tiếng', 'Cười to khiến ai cũng ngoái lại', 'Cười rũ rượi, đập bàn', 'Cười thầm một mình'], answer: 2, note: 'Tiếng cười là thứ lan truyền nhanh nhất 😂' },
      { emoji: '🎓', q: 'Lời khuyên mình hay đưa cho bạn bè?', options: ['“Cứ làm đi, đừng sợ”', '“Nghĩ kỹ rồi hẵng làm”', '“Ngủ một giấc là hết buồn”', '“Ăn gì đó đi cho khoẻ”'], answer: 3, note: 'Lời khuyên giản dị mà thấm thía 🍜' },
      { emoji: '😎', q: 'Khi được khen, mình sẽ đáp lại…', options: ['“Ôi thật hả, cảm ơn nha”', '“Có gì đâu mà”', '“Tui biết mà 😌”', 'Cười ngại ngùng rồi đổi chủ đề'], answer: 2, note: 'Tự tin một chút cho đời thêm màu 💅' },
      { emoji: '🌈', q: 'Câu động viên mình hay tự nhủ?', options: ['“Rồi mọi chuyện sẽ ổn”', '“Ngày mai sẽ tốt hơn”', '“Cố thêm chút nữa thôi”', '“Ăn no rồi tính tiếp”'], answer: 0, note: 'Niềm tin nhỏ giúp mình đi xa hơn 🌤️' }
    ]
  },
  {
    id: 'hobby',
    label: '🎮 Sở thích',
    questions: [
      { emoji: '🎬', q: 'Thể loại phim mình mê nhất?', options: ['Hành động, phiêu lưu', 'Tình cảm lãng mạn', 'Kinh dị, giật gân', 'Hoạt hình, hài nhẹ nhàng'], answer: 3, note: 'Phim hay là cả một thế giới nhỏ 🍿' },
      { emoji: '🎵', q: 'Mình hay nghe thể loại nhạc nào?', options: ['Pop / V-pop', 'Ballad buồn', 'Lofi, chill', 'Nhạc Hàn, nhạc Nhật'], answer: 2, note: 'Playlist nói lên tâm trạng 🎧' },
      { emoji: '📚', q: 'Mình thích đọc loại sách nào?', options: ['Tiểu thuyết', 'Truyện tranh / manga', 'Sách phát triển bản thân', 'Mình ít đọc sách'], answer: 1, note: 'Mỗi trang sách là một cuộc phiêu lưu 📖' },
      { emoji: '🎮', q: 'Mình chơi game ở mức nào?', options: ['Game thủ chính hiệu', 'Chơi cho vui thôi', 'Chỉ chơi game di động', 'Gần như không chơi'], answer: 2, note: 'Game là cách giải trí tuyệt vời 🕹️' },
      { emoji: '🏞️', q: 'Cuối tuần lý tưởng của mình là gì?', options: ['Đi dã ngoại, phượt', 'Ở nhà cày phim', 'Gặp gỡ bạn bè', 'Dọn dẹp, nấu nướng'], answer: 1, note: 'Cuối tuần chill là cuối tuần hạnh phúc 🌿' },
      { emoji: '🎨', q: 'Mình có năng khiếu hoặc sở thích sáng tạo nào?', options: ['Vẽ vời', 'Viết lách', 'Chụp ảnh / chỉnh ảnh', 'Làm đồ handmade'], answer: 2, note: 'Sáng tạo là niềm vui bất tận ✨' },
      { emoji: '⚽', q: 'Môn thể thao mình thích nhất?', options: ['Bóng đá', 'Cầu lông', 'Bơi lội', 'Chỉ thích… xem người khác chơi'], answer: 3, note: 'Cổ động viên cũng là một vị trí quan trọng 📣' },
      { emoji: '🐾', q: 'Mình thích nuôi con vật nào nhất?', options: ['Mèo', 'Chó', 'Thỏ / hamster', 'Cá cảnh'], answer: 0, note: 'Boss nhỏ làm cuộc sống thêm ấm áp 🐱' },
      { emoji: '🌸', q: 'Mình thích loại hoa nào nhất?', options: ['Hoa hướng dương', 'Hoa hồng', 'Hoa cúc hoạ mi', 'Hoa anh đào'], answer: 3, note: 'Mỗi loài hoa mang một ý nghĩa riêng 🌷' },
      { emoji: '🧳', q: 'Kiểu du lịch mình thích nhất?', options: ['Đi biển thư giãn', 'Leo núi, trekking', 'Khám phá phố cổ, ẩm thực', 'Nghỉ dưỡng trong resort'], answer: 2, note: 'Đi đâu cũng vui nếu đi cùng người hợp 🧭' }
    ]
  },
  {
    id: 'dream',
    label: '✨ Ước mơ',
    questions: [
      { emoji: '🌟', q: 'Điều mình ước nhất trong năm nay?', options: ['Có thêm thu nhập', 'Sức khoẻ dồi dào', 'Có một chuyến đi thật xa', 'Học được kỹ năng mới'], answer: 2, note: 'Ước mơ nhỏ cũng đáng để theo đuổi 🌠' },
      { emoji: '🏡', q: 'Ngôi nhà mơ ước của mình trông thế nào?', options: ['Căn hộ hiện đại giữa phố', 'Nhà vườn yên tĩnh', 'Nhà gần biển', 'Nhà nhỏ ấm cúng, có mèo'], answer: 3, note: 'Nhà là nơi trái tim được nghỉ ngơi 🏠' },
      { emoji: '💼', q: 'Nếu không làm công việc hiện tại, mình muốn làm gì?', options: ['Mở quán cà phê nhỏ', 'Làm du lịch, đi khắp nơi', 'Làm nghệ sĩ tự do', 'Làm chủ một cửa hàng online'], answer: 0, note: 'Ai cũng có một giấc mơ khác trong tim 💭' },
      { emoji: '🌍', q: 'Nơi mình muốn đặt chân đến nhất?', options: ['Nhật Bản', 'Hàn Quốc', 'Châu Âu', 'Thuỵ Sĩ, nơi có tuyết'], answer: 0, note: 'Thế giới rộng lớn đang chờ bạn 🗺️' },
      { emoji: '🎰', q: 'Nếu trúng số 1 tỷ, việc đầu tiên mình làm?', options: ['Gửi tiết kiệm', 'Đi du lịch vòng quanh', 'Mua nhà', 'Chia cho gia đình, bạn bè'], answer: 1, note: 'Có tiền rồi mới thấy mình hào phóng cỡ nào 🤑' },
      { emoji: '🦸', q: 'Nếu có siêu năng lực, mình muốn có gì?', options: ['Bay lượn trên trời', 'Tàng hình', 'Đọc được suy nghĩ', 'Dừng thời gian'], answer: 3, note: 'Dừng thời gian để ngủ thêm chút nữa 😴' },
      { emoji: '⏳', q: 'Nếu quay ngược thời gian, mình muốn về lúc nào?', options: ['Thời học sinh', 'Thời thơ ấu', 'Không muốn quay lại', 'Tương lai gần để xem trước'], answer: 0, note: 'Ký ức đẹp là kho báu quý giá 🎒' },
      { emoji: '🎯', q: 'Mục tiêu lớn nhất mình đang hướng tới?', options: ['Sự nghiệp ổn định', 'Cuộc sống bình yên', 'Tự do tài chính', 'Hạnh phúc bên người thương'], answer: 1, note: 'Bình yên là đích đến của nhiều người 🕊️' },
      { emoji: '👵', q: 'Về già, mình muốn sống như thế nào?', options: ['Ở quê, làm vườn nuôi gà', 'Du lịch khắp nơi', 'Quây quần bên con cháu', 'Mở tiệm nhỏ cho vui'], answer: 0, note: 'Một tuổi già an nhiên thật đáng mơ ước 🌻' },
      { emoji: '🎁', q: 'Món quà trong mơ mình muốn nhận nhất?', options: ['Một chuyến du lịch', 'Một chiếc điện thoại mới', 'Một lá thư tay chân thành', 'Một bất ngờ do bạn bè chuẩn bị'], answer: 3, note: 'Điều bất ngờ luôn là thứ ngọt ngào nhất 💝' }
    ]
  }
];