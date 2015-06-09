
(function(){
    var app = angular.module('gemStore', [ ]);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    app.controller('PanelController', function(){

        this.tab = 1;
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        }
    });

    var gems = [
        {
            name: 'Dodecandon',
            price: 2.95,
            description: 'This is the coolest gem ever!',
            canPurchase: true,
            soldOut: false,
            images: [
                'img/image1.png',
                'img/image1-2.png',
                'img/image1-3.png'
            ],
            reviews: [
                'Review 1',
                'Review 2',
                'Review 3'
            ]
        },
        {
            name: 'Ruby',
            price: 22.95,
            description: 'This is the coolest gem ever!',
            canPurchase: true,
            soldOut: false,
            images: [
                'img/image2.png',
                'img/image2-1.png',
                'img/image2-2.png'
            ],
            reviews: [
                'Review 1',
                'Review 2',
                'Review 3'
            ]
        },
        {
            name: 'Diamond',
            price: 12.95,
            description: 'This is the coolest gem ever!',
            canPurchase: true,
            soldOut: false,
            images: [
                'img/image3.png',
                'img/image3-1.png',
                'img/image3-2.png'
            ],
            reviews: [
                'Review 1',
                'Review 2',
                'Review 3'
            ]
        }
    ];
}());
