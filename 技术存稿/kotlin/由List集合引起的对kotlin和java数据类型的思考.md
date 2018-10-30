#1. 智能转换
#2. 	

		public class LK {
		    List<String> data = new ArrayList<>();
		    public void test(){
		        data.add("ll");
		    }
		}
	


	
		class BaseActivity: AppCompatActivity() {
		    val mData: List<String> = ArrayList()
		    override fun onCreate(savedInstanceState: Bundle?, persistentState: PersistableBundle?) {
		        super.onCreate(savedInstanceState, persistentState)
		        initData()
		    }
		
		    private fun initData() {
		        for (i in 0..10){
		            if(mData is ArrayList){
		                mData.add("Tab"+i)
		            }
		        }
		    }
		}
#3. PPPP