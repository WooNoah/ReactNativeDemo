# ReactNativeDemo
RN demo

## 知识点
#### Flexbox
1. flex
RN中布局的一个属性，（前提，RN中布局也都是按照前端HTML盒子的性质来布局的）
如果未设置，则控件根据自己设置的width、height值来改变，
如果设置为1，且别的同级视图没有设置此属性，则根据和自己平级的view开始，占据父视图的剩余位置
如果所有的同级视图都设置了此属性，则把父视图等比分为（所有flex值之和）份，按flex值占的比例来显示

2. alignSelf
相关的属性有：
justifyContent: flex-start/flex-end/center/space-between/space-around
alignItems: flex-start/flex-end/center/stretch
flexDirection: row/column
**jusityContent**属性**不会**从父视图继承
**但是alignItem属性会继承**，因此如果我们父视图设置过了'center'属性，那么子视图也会默认布局为center，如果想要修改交叉轴的布局，但是又不想影响别的view,则可以使用alignSelf属性来修改。
比如想要实现如下的效果：

