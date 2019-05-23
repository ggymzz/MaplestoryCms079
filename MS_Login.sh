#!/bin/bash
export CLASSPATH=.:dist/jmser079.jar:dist/mina-core.jar:dist/slf4j-api.jar:dist/slf4j-jdk14.jar:dist/mysql-connector-java-bin.jar:dist/rhino-js-engine-1.7.7.1.jar:dist/rhino-1.7.7.1.jar
java -Xmx512m -Dnet.sf.cherry.recvops=recvops.properties -Dnet.sf.cherry.sendops=sendops.properties -Dnet.sf.cherry.wzpath=wz/ -Dnet.sf.cherry.login.config=CherryMS4Love.properties -Djavax.net.ssl.keyStore=filename.keystore -Djavax.net.ssl.keyStorePassword=passwd -Djavax.net.ssl.trustStore=filename.keystore -Djavax.net.ssl.trustStorePassword=passwd net.sf.cherry.net.login.LoginServer
