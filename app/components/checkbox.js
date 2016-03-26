import React from 'react';
import Toggle from 'material-ui/lib/toggle';

const styles = {
    block: {
        maxWidth: 250
    },
    toggle: {
        marginBottom: 16
    }
};


const ToggleExampleSimple = React.createClass({
    render(){
        return (
            <Toggle
                className={this.props.completed ? "toggled" : ""}
                label={this.props.label}
                labelPosition='right'
                defaultToggled={this.props.completed}
                style={styles.toggle}
            />
        )
    }
});

export default ToggleExampleSimple;