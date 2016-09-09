Template.view_table.onCreated(function() {
	Meteor.subscribe('pac', {'post':'Hello', 'author.author':'Rel A'});
})

Template.view_table.helpers({
	jp: function(obj) {
		return JSON.stringify(Posts.find().fetch());
	},
	stringify: function(array, key)
	{
		var str = "";
		for (var k in array) {
			var a = array[k];
			str += key;
			str += ",";
		}
		return str;
	},
	pac: function() {
		return Posts.find().fetch();
	}
})