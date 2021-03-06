import * as React from 'react';
import { Paper, Typography } from '@material-ui/core';
import {createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import { StyleRules } from '@material-ui/core/styles';
import { backgroundSquareProp } from '../../types/common/background-square';
import ColorObjController from '../../systems/Colors/color-obj-controller';

const tiltAngle = "45deg";

const styles = (theme:Theme) :StyleRules => createStyles({
    paper: {
        position: "absolute",
        transition: "1.2s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // transform: 'translate3d(0,0,0)',
    },
    outline: {
        top: 0,
        left: 0,
    },
    centerWord: {
        position: "absolute",
        margin: "auto",
        color: "#ffffff",
        transform: `rotate(-${tiltAngle})`,
    }
});


interface Props extends WithStyles<typeof styles>,backgroundSquareProp{};


class BackgroundSquare extends React.Component <Props>{
    
    render(){
        const colorObj = new ColorObjController();
        return (
            <Paper
                data-id={this.props.id}
                className={`${this.props.classes.paper} ${this.props.classes.outline}`}
                style={{
                backgroundColor: colorObj.specifiedColor(this.props.colorName)[900],
                width: this.props.sideLength,
                height: this.props.sideLength,
                zIndex: this.props.zindex,

                transform: `translate(${this.props.left}px,${this.props.top}px) rotate(${tiltAngle})`
                }}>
                <Paper className={this.props.classes.paper}
                style={{
                    backgroundColor: colorObj.specifiedColor(this.props.colorName)[500],
                    width: this.props.sideLength-20,
                    height: this.props.sideLength-20,
                }}>
                    <Paper className={this.props.classes.paper}
                    style={{
                        backgroundColor: colorObj.specifiedColor(this.props.colorName)[300],
                        width: this.props.sideLength - 40,
                        height: this.props.sideLength - 40,
                    }}>
                        <Typography align={'center'} variant={'h4'} className={this.props.classes.centerWord}>
                            {this.props.word}
                        </Typography>
                    </Paper>
                </Paper>
            </Paper>
        );
    }
}

export default withStyles(styles)(BackgroundSquare);
