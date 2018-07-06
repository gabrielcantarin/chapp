import React, { Component } from "react";
import { AdMobBanner } from "expo";
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 0,
            numberA: 0,
            numberB: 0,
            operator: null,
        };

    }
    printNumber(number) {
        if (this.state.display.toString().length < 10) {
            if (number == "." && this.state.display.toString().includes(".")) {
                return false;
            } else {
                this.setState({ display: this.state.display.toString() + number.toString() })
            }

            if (this.state.display == "0" && number != ".") {
                this.setState({ display: number.toString() })
            } else {
                this.setState({ display: this.state.display.toString() + number.toString() })
            }

            // this.setState({ 
            //   display: this.state.display == "0" ?  number : this.state.display.toString() + number.toString() 
            // })

        }
    }

    reset() {
        this.setState({
            operator: null,
            numberA: 0,
            numberB: 0,
            display: 0,
        })
    }

    getOperator(operation) {
        if (operation == "%") {
            this.setState({
                operator: null,
                numberA: Number(this.state.display) / 100,
                display: Number(this.state.display) / 100,
            })
        } else {
            this.setState({
                operator: operation,
                numberA: Number(this.state.display),
                display: 0,
            })
        }
    }

    calculate() {
        this.setState({
            numberB: Number(this.state.display),
        }, () => {
            // Alert.alert(eval(this.state.numberA) * eval(this.state.numberB)  );
            switch (this.state.operator) {
                case "x":
                    if (this.state.numberA && this.state.numberB && this.state.operator) {
                        this.setState({
                            display: this.state.numberA * this.state.numberB,
                            numberA: this.state.display,
                        })
                    } else {
                        alert('fail');
                    }
                    return true;
                case "/":
                    if (this.state.numberA && this.state.numberB && this.state.operator) {
                        this.setState({
                            display: this.state.numberA / this.state.numberB,
                            numberA: this.state.display,
                        })
                    } else {
                        alert('fail');
                    }
                    return true;
                case "-":
                    if (this.state.numberA && this.state.numberB && this.state.operator) {
                        this.setState({
                            display: this.state.numberA - this.state.numberB,
                            numberA: this.state.display,
                        })
                    } else {
                        alert('fail');
                    }
                    return true;
                case "+":
                    if (this.state.numberA && this.state.numberB && this.state.operator) {
                        this.setState({
                            display: parseInt(this.state.numberA) + parseInt(this.state.display),
                            numberA: this.state.display,
                        })
                    } else {
                        alert('fail');
                    }
                    return true;

            }
        });


    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" hidden={false} />
                <View style={styles.ads}>
                    {/* <TouchableOpacity style={{ height: 35, width: 35, backgroundColor: 'white', marginLeft: 16 }}
                        onPress={() => {
                            if (this.props.onDrawerActivator) {
                                this.props.onDrawerActivator()
                            }
                        }}
                    >
                        <View></View>
                    </TouchableOpacity> */}
                    <AdMobBanner
                        style={styles.bottomBanner}
                        bannerSize="smartBannerPortrait"
                        // adUnitID="ca-app-pub-3940256099942544/6300978111"
                        adUnitID="ca-app-pub-7397930156564286/6195646990"
                        // adUnitID="ca-app-pub-7397930156564286/8534891957"
                        // Test ID, Replace with your-admob-unit-id
                        testDeviceID="EMULATOR"
                        didFailToReceiveAdWithError={this.bannerError}
                    />
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.inputMain}>{this.state.display}</Text>
                </View>
                <View style={styles.keyBoard}>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.buttonSpecial} onPress={() => this.reset()}>
                            <Text style={styles.keySpecial}>C</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSpecial} onPress={() => this.getOperator("+/-")}>
                            <Text style={styles.keySpecial}>+/-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSpecial} onPress={() => this.getOperator("%")}>
                            <Text style={styles.keySpecial}>%</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSimbles} onPress={() => this.getOperator("/")}>
                            <Text style={styles.keySimble}>÷</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.printNumber(7)}>
                            <Text style={styles.keyNumber}>7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.printNumber(8)}>
                            <Text style={styles.keyNumber}>8</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.printNumber(9)}>
                            <Text style={styles.keyNumber}>9</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSimbles} onPress={() => this.getOperator("x")}>
                            <Text style={styles.keySimble}>x</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.printNumber(4)}>
                            <Text style={styles.keyNumber}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.printNumber(5)}>
                            <Text style={styles.keyNumber}>5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.printNumber(6)}>
                            <Text style={styles.keyNumber}>6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSimbles} onPress={() => this.getOperator("-")}>
                            <Text style={styles.keySimble}>-</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.printNumber(1)}>
                            <Text style={styles.keyNumber}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.printNumber(2)}>
                            <Text style={styles.keyNumber}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNumber} onPress={() => this.printNumber(3)}>
                            <Text style={styles.keyNumber}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSimbles} onPress={() => this.getOperator("+")}>
                            <Text style={styles.keySimble}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>

                        <View style={[styles.bottomButtonWrapper, styles.zeroWrapper]}>
                            <TouchableOpacity style={[styles.buttonNumber, { width: '100%' }]} onPress={() => this.printNumber(0)}>
                                <Text style={styles.keyZero}>0</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottomButtonWrapper}>
                            <TouchableOpacity style={styles.buttonNumber} onPress={() => this.printNumber(".")}>
                                <Text style={styles.keyNumber}>.</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonSimbles} onPress={() => this.calculate()}>
                                <Text style={styles.keySimble}>=</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 0,
        margin: 0,
    },
    ads: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // backgroundColor: 'white',
        height: '20%',
        alignItems: 'center',
        // backgroundColor: 'black',
    },
    viewInput: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // backgroundColor: 'blue',
        height: '20%',
        alignItems: 'flex-end',
    },
    keyBoard: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        //backgroundColor: 'blue',
        paddingHorizontal: 4,
        marginBottom: 8,
        height: '60%',
        alignItems: 'center',
    },
    inputMain: {
        color: 'white',
        fontSize: 60,
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        //backgroundColor: 'red',
        flex: 1,
        width: '100%',
        height: '12%',
    },
    buttonZero: {
        borderRadius: 50,
        width: '100%',
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
        //flex: 1,
        backgroundColor: '#333333',
        //borderWidth: 1,
        //borderColor: '#666',
    },
    buttonNumber: {
        borderRadius: 50,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderWidth: 3,
        borderColor: '#BA2C6B',

    },
    buttonSimbles: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BA2C6B',
        borderRadius: 50,
        width: 70,
        height: 70,
        //borderWidth: 1,
        //borderColor: '#666',
    },

    buttonSpecial: {
        /*  flex: 1,
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: '#A4A5A7',
         borderWidth: 1,
         borderColor: '#666', */
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BA2C6B',
        borderRadius: 50,
        width: 70,
        height: 70,
        //borderWidth: 1,
        //borderColor: '#666',
    },
    keyNumber: {
        color: '#fff',
        fontSize: 30,
    },
    keySimble: {
        color: 'white',
        fontSize: 40,
    },
    keyZero: {
        textAlign: 'left',
        alignSelf: 'stretch',
        color: '#fff',
        fontSize: 30,
        marginLeft: 30,
    },
    zeroWrapper: {
        paddingHorizontal: 4
    },
    bottomButtonWrapper: {
        flexDirection: 'row', width: "50%", justifyContent: "space-around",
    },
    keySpecial: {
        fontSize: 30,
        color: 'white',
    },

})
export default Calculator;
