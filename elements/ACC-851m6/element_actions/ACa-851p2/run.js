function(instance, properties, context) {

    const { themeMode, themeColor, themeBackground } = properties;

    if (!instance.data.web3modal) return;

    let conf = {};
    if(themeMode) conf.themeMode = themeMode;
    if(themeColor) conf.themeColor = themeColor;
    if(themeBackground) conf.themeBackground= themeBackground;

    instance.data.web3modal.setTheme(conf);

}