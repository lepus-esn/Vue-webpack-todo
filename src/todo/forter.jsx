export default {
    data() {
        return {
            author: 'Lepus'
        }
    },

    render() {
        // 为啥是this.author
        return (
            <div id="footer">
                <span>Written by {this.author}</span>
            </div>
        )
    }
}