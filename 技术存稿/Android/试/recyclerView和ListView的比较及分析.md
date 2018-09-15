一些比较资源：<br>

- ListView 与 RecyclerView 简单对比<br>[https://blog.csdn.net/shu_lance/article/details/79566189](https://blog.csdn.net/shu_lance/article/details/79566189 "ListView 与 RecyclerView 简单对比")
- Android ListView与RecyclerView对比浅析--缓存机制<br>[https://www.jianshu.com/p/193fb966e954](https://www.jianshu.com/p/193fb966e954 "Android ListView与RecyclerView对比浅析--缓存机制")
- 深入理解Android中的缓存机制(二)RecyclerView跟ListView缓存机制对比<br>[https://www.jianshu.com/p/01f161cb498c](https://www.jianshu.com/p/01f161cb498c "深入理解Android中的缓存机制(二)RecyclerView跟ListView缓存机制对比")
- Android ListView RecycleBin(View 回收利用)机制<br>[https://blog.csdn.net/zhangyu6429/article/details/58587142](https://blog.csdn.net/zhangyu6429/article/details/58587142 "Android ListView RecycleBin(View 回收利用)机制")
- RecyclerView回收机制分析--“取”<br>[https://blog.csdn.net/sonic_storm/article/details/74076466](https://blog.csdn.net/sonic_storm/article/details/74076466 "RecyclerView回收机制分析--“取”")
- 基于滑动场景解析RecyclerView的回收复用机制原理<br>[https://www.jianshu.com/p/9306b365da57](https://www.jianshu.com/p/9306b365da57 "基于滑动场景解析RecyclerView的回收复用机制原理")
- RecyclerView源码解析(二)——缓存机制<br>[https://blog.csdn.net/sdfdzx/article/details/79795174](https://blog.csdn.net/sdfdzx/article/details/79795174 "RecyclerView源码解析(二)——缓存机制")
- RecyclerView缓存机制总结<br>[https://blog.csdn.net/qq_17093685/article/details/78617913?locationNum=3&fps=1](https://blog.csdn.net/qq_17093685/article/details/78617913?locationNum=3&fps=1 "RecyclerView缓存机制总结")
- Android 踩坑记录（一）- Recyclerview的缓存机制<br>[https://www.jianshu.com/p/32c963b1ebc1](https://www.jianshu.com/p/32c963b1ebc1 "Android 踩坑记录（一）- Recyclerview的缓存机制")
- 从setRecyclerListener看listView回收机制<br>[https://blog.csdn.net/u014737138/article/details/51620495](https://blog.csdn.net/u014737138/article/details/51620495 "从setRecyclerListener看listView回收机制")

#RecyclerView
【腾讯Bugly干货分享】RecyclerView 必知必会<br>[https://www.cnblogs.com/bugly/p/6264751.html](https://www.cnblogs.com/bugly/p/6264751.html "【腾讯Bugly干货分享】RecyclerView 必知必会")

- ListView我用的挺好的，为什么要换RecyclerView？
- ListView稳定，熟悉，还知道很多开源库，特别的好用！
- RecyclerView不能添加头部，ListView能！
##一、优点
- RecyclerView最大的优势就是灵活，RecyclerView只需改变一行代码就可以变化多种不同的布局显示排版，这一点对于开发者是非常方便的！
- RecyclerView.Adapter，比BaseAdapter做了更好的封装，把BaseAdapter的getView方法拆分成onCreateViewHolder方法和onBindViewHolder方法，强制需要创建ViewHolder，这样的好处就是避免写性能不佳的代码
- 封装了之前ListView的优化，封装了之前ViewHolder的复用，这样在自定义适配器的时候我们面向的不再是View，而是一个ViewHolder.
- 供了插板式的体验，高度解耦，异常灵活，针对每一项的显示抽取出了相应的类来控制每一个item的显示。若想实现网格视图或者瀑布流或者横向的ListView都可以通过制定不一样的LayoutManager来实现高大上的效果，这样就可以针对自己的业务逻辑随意发挥了。
- 现在的RecyclerView对增删也有了动画的加入，并且你还可以自定义这些动画。
- 对于Adaper适配器，现在刷新也增加了相应的方法，虽然之前的notifyDataSetChanged()同样可以实现这样的效果，但是每次刷新整个界面在数据多的时候必然会大大影响用户体验。所以Adapter增加了更新数据的方法notifyItemInserted和notifyItemRemoved，这样就可以在增删数据的时候只刷新被操作的Item,而且还加入了高大上的动画效果呢。
##二、常用相关类及方法
###常用方法
- getChildAdapterPosition(View)：获取view在Adapter中的position。
-  getChildLayoutPosition(View)：获取view在layout中的position。

两者区别：<br>
大部分情况下，它与getChildAdapterPosition()是相同的。但是当新布局尚未完成时(比如新增动画尚未执行完毕时)，两者的值是不同的。如下：
		
			if(view != null){
			    Log.e(TAG,"still adapter.position = "+recyclerView.getChildAdapterPosition(view)+",layout = "+recyclerView.getChildLayoutPosition(view));
			}

			view = recyclerView.getChildAt(1);

			Log.e(TAG,"before adapter.position = "+recyclerView.getChildAdapterPosition(view)+",layout = "+recyclerView.getChildLayoutPosition(view));

			recyclerView.getAdapter().notifyItemInserted(1);

			Log.e(TAG,"after adapter.position = "+recyclerView.getChildAdapterPosition(view)+",layout = "+recyclerView.getChildLayoutPosition(view));
	




#ListView
Android ListView工作原理完全解析，带你从源码的角度彻底理解<br>[https://blog.csdn.net/guolin_blog/article/details/44996879](https://blog.csdn.net/guolin_blog/article/details/44996879 "Android ListView工作原理完全解析，带你从源码的角度彻底理解")