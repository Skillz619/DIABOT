
https://shreekdiabot.netlify.app/


 It is designed using technologies like HTML 5 , CSS 3 , JavaScript and Boot Strap 4 . 
<code>
from SCO import FlowHandler

class NodeT2DateHandler(FlowHandler):
  def __init__(self,**kwargs):
      function_name = type(self).__name__
      super().__init__(function_name=function_name,**kwargs)

  def process(self,message:Message) -> list:
      return self.processing_function(message=Message)

  def run_business_layer_for_present_node(self,message:Message):
      “””
act_data is the actual data on which at present node computation are to be reflected
      “””
  def processing_function(self, message:Message) -> list:
nodes , input_data, act_data, intermediate_data, last_node_response = extract_from_message(message)

    return [
NextMessageNode(
destination = T13_sqs, 
act_data = act_data,
intermediate_data = intermediate_data,     node_data=input_data,
name = T12 
),
NextForkNode(
 		nodes = [
NextMessageNode(
destination = T3_sqs,
act_data = act_data, 
intermediate_data = intermediate_data,
 						node_data=input_data,name = function3)
						,
       					 NextMessageNode(
destination = T4_sqs, act_data = act_data, intermediate_data = intermediate_data, node_data=input_data,
name = T4 )
        			],join_node = T10_sqs),
NextForkNode(
        				nodes = [
NextMessageNode(
destination = T5_sqs,
act_data = act_data,
intermediate_data = intermediate_data, node_data=input_data,
name = T5  ),

        				NextMessageNode(
destination = T6_sqs,
act_data = act_data,
intermediate_data = intermediate_data, node_data=input_data,
name = T6 )
        						],
join_node = T11_sqs
)

    	]
</code>
