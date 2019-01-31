$(document).ready(function(){
    
    // Welcome
    console.log("Welcome to the Cookie Clicker Minigame!");
    console.log("Click the cookie to gain more cookies.");
    console.log("Buy upgrades to earn even more cookies.");
    console.log("Enjoy!");
    
    // Cookies
    var cookies = 0;
    
    var totalCookies = 0;
    var clicks = 0;
    var adder = 1;
    
    var amountClick = 0;
    var amountMill = 0;
    var amountFactory = 0;
    var amountBusiness = 0;
    var amountMonopoly = 0;
    
    // Earn cookies when click
    $(".cookie").click( function() {
        cookies += adder;
        totalCookies += adder;
        clicks++;
        var amount = document.getElementsByClassName("amount");
        amount[0].innerHTML = cookies.toLocaleString();
        
        // Click Achievements
        if(clicks == 100) {
            $(".achievementClicker").css("opacity", "1");
            $(".achievementClicker").attr({title: "Unlocked"});
        }
        if(clicks == 10000) {
            $(".achievementSuperClicker").css("opacity", "1");
            $(".achievementSuperClicker").attr({title: "Unlocked"});
        }
    });
    
    // How To Play Popup
    $(".howTo").click( function() {
        if ($('.statsPopup').is(':hidden') && $('.achievementsPopup').is(':hidden') && $('.aboutPopup').is(':hidden')) {
            $(".howToPopup").show(800);
        }
    });
    
    // Stats Popup
    $(".stats").click( function() {
        if ($('.howToPopup').is(':hidden') && $('.achievementsPopup').is(':hidden') && $('.aboutPopup').is(':hidden')) {
            $(".statsPopup").show(800);
        }
    });
    
    // Achievements Popup
    $(".achievements").click( function() {
        if ($('.howToPopup').is(':hidden') && $('.statsPopup').is(':hidden') && $('.aboutPopup').is(':hidden')) {
            $(".achievementsPopup").show(800);
        }
    });
    
    // About Popup
    $(".about").click( function() {
        if ($('.howToPopup').is(':hidden') && $('.statsPopup').is(':hidden') && $('.achievementsPopup').is(':hidden')) {
            $(".aboutPopup").show(800);
        }
    });
    
    // Make How To Play Button disappear after 20 seconds
    (function () {
        setInterval(function() {
            $(".howTo").css("display", "none");
        }, 20000);
    })();
    
    // Clicking popupX makes popup disappear
    $(".popupX").click( function() {
        $(".howToPopup").hide();
        $(".statsPopup").hide();
        $(".achievementsPopup").hide();
        $(".aboutPopup").hide();
    });
    
    // Adds cookies per second "cps" to total amount of cookies every second
    var cps = 0;
    (function () {
    setInterval(function() {
        cookies += cps;
        totalCookies += cps;
        document.getElementsByClassName("amount")[0].innerHTML = cookies.toLocaleString();
    }, 1000);
    })();
    
    // Click Upgrade
    var clickAmount = 100;
    $(".clickUpgrade").click( function() {
        clickAmount = parseInt(clickAmount);
        if(cookies >= clickAmount) {
            amountClick++;
            $(".amountClick").text(amountClick);
            adder++;
            cookies -= clickAmount;
            document.getElementsByClassName("amount")[0].innerHTML = cookies.toLocaleString();
            clickAmount *= 1.6;
            clickAmount = Math.floor(clickAmount);
            document.getElementsByClassName("clickAmount")[0].innerHTML = clickAmount.toLocaleString();
            
            // Click Upgrade Achievement
            if(amountClick == 1) {
                $(".achievementClickUpgrade").css("opacity", "1");
                $(".achievementClickUpgrade").attr({title: "Unlocked"});
            }
            
            if(amountClick == 25) {
                $(".achievementClickSuperUpgrade").css("opacity", "1");
                $(".achievementClickSuperUpgrade").attr({title: "Unlocked"});
            }
        }
    });
    
    // Mill Upgrade
    var millAmount = 500;
    $(".millUpgrade").click( function() {
        millAmount = parseInt(millAmount);
        if(cookies >= millAmount) {
            amountMill++;
            $(".amountMill").text(amountMill);
            cookies -= millAmount
            document.getElementsByClassName("amount")[0].innerHTML = cookies.toLocaleString();
            millAmount *= 1.6;
            millAmount = Math.floor(millAmount);
            document.getElementsByClassName("millAmount")[0].innerHTML = millAmount.toLocaleString();
            cps += 10;
            
            // Mill Upgrade Achievement
            if(amountMill == 1) {
                $(".achievementMiller").css("opacity", "1");
                $(".achievementMiller").attr({title: "Unlocked"});
            }
            
            if(amountMill == 25) {
                $(".achievementSuperMiller").css("opacity", "1");
                $(".achievementSuperMiller").attr({title: "Unlocked"});
            }
        }
    });
    
    // Factory Upgrade
    var factoryAmount = 8000;
    $(".factoryUpgrade").click( function() {
        factoryAmount = parseInt(factoryAmount);
        if(cookies >= factoryAmount) {
            amountFactory++;
            $(".amountFactory").text(amountFactory);
            cookies -= factoryAmount
            document.getElementsByClassName("amount")[0].innerHTML = cookies.toLocaleString();
            factoryAmount *= 1.6;
            factoryAmount = Math.floor(factoryAmount);
            document.getElementsByClassName("factoryAmount")[0].innerHTML = factoryAmount.toLocaleString();
            cps += 100;
            
            // Factory Upgrade Achievement
            if(amountFactory == 1) {
                $(".achievementFactory").css("opacity", "1");
                $(".achievementFactory").attr({title: "Unlocked"});
            }
            
            if(amountFactory == 25) {
                $(".achievementSuperFactory").css("opacity", "1");
                $(".achievementSuperFactory").attr({title: "Unlocked"});
            }
        }
    });
    
    // Business Upgrade
    var businessAmount = 20000;
    $(".businessUpgrade").click( function() {
        businessAmount = parseInt(businessAmount);
        if(cookies >= businessAmount) {
            amountBusiness++;
            $(".amountBusiness").text(amountBusiness);
            cookies -= businessAmount
            document.getElementsByClassName("amount")[0].innerHTML = cookies;
            businessAmount *= 1.6;
            businessAmount = Math.floor(businessAmount);
            document.getElementsByClassName("businessAmount")[0].innerHTML = businessAmount.toLocaleString();
            cps += 1000;
            
            // Business Upgrade Achievement
            if(amountBusiness == 1) {
                $(".achievementBusiness").css("opacity", "1");
                $(".achievementBusiness").attr({title: "Unlocked"});
            }
            
            if(amountBusiness == 25) {
                $(".achievementSuperBusiness").css("opacity", "1");
                $(".achievementSuperBusiness").attr({title: "Unlocked"});
            }
        }
    });
    
    // Monopoly Upgrade
    var monopolyAmount = 10000000;
    $(".monopolyUpgrade").click( function() {
        monopolyAmount = parseInt(monopolyAmount);
        if(cookies >= monopolyAmount) {
            amountMonopoly++;
            $(".amountMonopoly").text(amountMonopoly);
            cookies -= monopolyAmount
            document.getElementsByClassName("amount")[0].innerHTML = cookies.toLocaleString();
            monopolyAmount *= 1.6;
            monopolyAmount = Math.floor(monopolyAmount);
            document.getElementsByClassName("monopolyAmount")[0].innerHTML = monopolyAmount.toLocaleString();
            cps += 100000;
            
            // Business Upgrade Achievement
            if(amountMonopoly == 1) {
                $(".achievementMonopoly").css("opacity", "1");
                $(".achievementMonopoly").attr({title: "Unlocked"});
            }
            
            if(amountMonopoly == 25) {
                $(".achievementSuperMonopoly").css("opacity", "1");
                $(".achievementSuperMonopoly").attr({title: "Unlocked"});
            }
        }
    });
    
    // Clicking Stats Button Shows Stats Numbers
    $(".stats").click( function() {
        let amount = $(".amount").text();
        $(".spanCookies").text(amount);
        
        $(".spanTotalCookies").text(totalCookies.toLocaleString());
        $(".spanClicks").text(clicks.toLocaleString());
        $(".spanCPS").text(cps.toLocaleString());
        
        let totalUpgrades = amountClick + amountMill + amountFactory + amountBusiness + amountMonopoly;
        $(".spanTotalUpgrades").text(totalUpgrades);
    });

    
});