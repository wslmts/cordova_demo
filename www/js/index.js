/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause',function(){var receivedElement = document.querySelector('.received');
            receivedElement.innerHTML='pause';}, false);
        document.addEventListener('resume',function(){
            var receivedElement = document.querySelector('.received');
            receivedElement.innerHTML='resume';}, false);
        document.addEventListener('backbutton',this.domevent, false);
        document.addEventListener('batterystatus',this.batterystatus, false);

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent1('deviceready');
        navigator.accelerometer.getCurrentAcceleration(function(position){
            var receivedElement = document.querySelector('.received');
            receivedElement.innerHTML=position.x+"--"+position.y+"--"+position.timestamp+"--";
        });

    },
    // Update DOM on a Received Event
    receivedEvent1: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        var x=parentElement.querySelector('.battery');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        receivedElement.innerHTML+=' -- '+ id;
        console.log('Received Event: ' + id);
        x.innerHTML="network type: " +navigator.network.connection.type;
    },
    domevent:function(e){
        var receivedElement = document.querySelector('.received');
        receivedElement.innerHTML='click back button--'+e;
    },

    batterystatus:function(e){
        var receivedElement = document.querySelector('.battery');
        receivedElement.innerHTML='battery changes';
    }
};

app.initialize();