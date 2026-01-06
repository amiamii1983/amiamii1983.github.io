hexo.extend.filter.register('before_post_render', function(data){
  if (data.cover) return data;

  const categoryCovers = {
    '书签': '/img/fish_red.png',
    '软件': '/img/fish_blue.png',
    '游戏': '/img/fish_yellow.png',
    '教学': '/img/fish_green.png'
  };

  if (data.categories && data.categories.length > 0) {
    for (let i = 0; i < data.categories.length; i++) {
      const categoryName = data.categories.data[i].name;
      if (categoryCovers[categoryName]) {
        data.cover = categoryCovers[categoryName];
        break; 
      }
    }
  }

  return data;
});
