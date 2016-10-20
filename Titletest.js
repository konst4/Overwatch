


describe("Title of document", function(){
    var TestUtils = React.addons.TestUtils;
    var TitleComponent, element, renderedDOM;
    beforeEach(function(done){
        element = React.createElement(Title);
        TitleComponent = TestUtils.renderIntoDocument(element);
        TitleComponent.setState({items: [{text: "testItem"}]}, done);
    });
    it("Exists", function(){
        let title = TestUtils.scryRenderedDOMComponentsWithTag(TitleComponent,"h1");
        expect(title).toBeDefined();
    });
});