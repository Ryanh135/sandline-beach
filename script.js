document.getElementById('submitComment').addEventListener('click', function(){
    var comment = document.getElementById('commentText').value;
    var commentsSection = document.getElementById('commentsSection');
    var newComment = document.createElement('p');
    newComment.textContent = comment;
    commentsSection.appendChild(newComment);
    document.getElementById('commentText').value = '';
  });
  
  var ratings = [];
  document.getElementById('submitRating').addEventListener('click', function(){
    var rating = document.getElementById('rating').value;
    ratings.push(parseInt(rating));
    var total = 0;
    for(var i = 0; i < ratings.length; i++) {
        total += ratings[i];
    }
    var avg = total / ratings.length;
    document.getElementById('averageRating').textContent = avg.toFixed(2);
    document.getElementById('rating').value = '';
  });
  
