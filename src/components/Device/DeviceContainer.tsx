import React, { Component } from 'react'
import DeviceView from './Device';
import { Plugins } from '@capacitor/core';

export class DeviceContainer extends Component {

    state: { mobileInfo: string, batteryInfo: string, languageInfo: string }
    devicePlugin: any;
    constructor(props: any) {
        super(props)
        this.state = {
            mobileInfo: '',
            batteryInfo: '',
            languageInfo: ''
        }
    }
    async getDeviceInfo() {
        const { Device } = Plugins;
        const info = await Device.getInfo();
        const batteryInfo = await Device.getBatteryInfo();
        const langInfo = await Device.getLanguageCode();
        this.setState({
            mobileInfo: JSON.stringify(info),
            batteryInfo: JSON.stringify(batteryInfo),
            languageInfo: JSON.stringify(langInfo)
        });
    }

    componentDidMount() {
        this.getDeviceInfo();
    }
    render() {
        return (
            <DeviceView
                mobileInfo = {this.state.mobileInfo}
                batteryInfo = {this.state.batteryInfo}
                languageInfo = {this.state.languageInfo}
            />
        )
    }
}