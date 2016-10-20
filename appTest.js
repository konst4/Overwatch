/**
 * Created by Collin on 10/19/2016.
 */
describe("main application", function(){
    var TestUtils = React.addons.TestUtils;
    var App, element, renderedDOM;
    beforeEach(function(done){
        element = React.createElement(App);
        App = TestUtils.renderIntoDocument(element);
        App.setState({items: [{text: "testItem"}]}, done);
    });
    it("Exists", function(){
        let app = TestUtils.scryRenderedDOMComponentsWithTag(TitleComponent,"h1");
        expect(app).toBeDefined();
    });
});