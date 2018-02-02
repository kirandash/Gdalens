import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import * as d3 from 'd3';

@Component({
  selector: 'app-ui-charts',
  templateUrl: './ui-charts.component.html',
  styleUrls: ['./ui-charts.component.scss']
})
export class UiChartsComponent implements OnInit {
  data: any[] = [
    {
      'name': '360 grader',
      'value': 1066
    },
    {
      'name': 'Triatlon',
      'value': 1403
    },
    {
      'name': 'Adventure',
      'value': 2546
    },
    {
      'name': 'Fitness',
      'value': 1856
    },
    {
      'name': 'Håndbold',
      'value': 845
    },
    {
      'name': 'Fodbold',
      'value': 1655
    },
    {
      'name': 'Badminton',
      'value': 2412
    },
    {
      'name': 'Dans',
      'value': 2689
    },
    {
      'name': 'E-Sport',
      'value': 1100
    }
  ];
  label = 'Samlet studerende indskrevet';
  colorScheme = {
    domain: ['#FDD835', '#3F51B5', '#009688', '#EF6C00','#e592a2', '#282d48', '#95d9eb', '#5d698a', '#ea0000']
  };

  // Gauge
  gaugeData = [
    {
      'name': '360 grader',
      'value': 1066
    },
    {
      'name': 'Triatlon',
      'value': 1403
    },
    {
      'name': 'Adventure',
      'value': 2546
    },
    {
      'name': 'Fitness',
      'value': 1856
    },
    {
      'name': 'Håndbold',
      'value': 845
    },
    {
      'name': 'Fodbold',
      'value': 1655
    },
    {
      'name': 'Badminton',
      'value': 2412
    },
    {
      'name': 'Dans',
      'value': 2689
    },
    {
      'name': 'E-Sport',
      'value': 1100
    }
  ];

  // Area
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'År';
  showYAxisLabel = true;
  yAxisLabel = 'Studerende';

  areaData = [
    {
      'name': 'Studerende om året',
      'series': [
        {
          'name': '2010',
          'value': 656
        },
        {
          'name': '2011',
          'value': 843
        },
        {
          'name': '2012',
          'value': 1296
        },
        {
          'name': '2013',
          'value': 2406
        },
        {
          'name': '2014',
          'value': 1865
        },
        {
          'name': '2015',
          'value': 2263
        },
        {
          'name': '2016',
          'value': 1946
        },
        {
          'name': '2017',
          'value': 2965
        }
      ]
    },
  ];

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  pieData = [
    {
      'name': '360 grader',
      'value': 1066
    },
    {
      'name': 'Triatlon',
      'value': 1403
    },
    {
      'name': 'Adventure',
      'value': 2546
    },
    {
      'name': 'Fitness',
      'value': 1856
    },
    {
      'name': 'Håndbold',
      'value': 845
    },
    {
      'name': 'Fodbold',
      'value': 1655
    },
    {
      'name': 'Badminton',
      'value': 2412
    },
    {
      'name': 'Dans',
      'value': 2689
    },
    {
      'name': 'E-Sport',
      'value': 1100
    }
  ];

  // Polar
  polarData = [
    {
      name: '360 grader',
      series: [
        {
          name: '2017',
          value: 130
        },
        {
          name: '2016',
          value: 140
        },
        {
          name: '2015',
          value: 96
        },
        {
          name: '2014',
          value: 44
        },
        {
          name: '2013',
          value: 214
        },
        {
          name: '2012',
          value: 160
        },
        {
          name: '2011',
          value: 85
        },
        {
          name: '2010',
          value: 33
        }
      ]
    },
    {
      name: 'Triatlon',
      series: [
        {
          name: '2017',
          value: 240
        },
        {
          name: '2016',
          value: 145
        },
        {
          name: '2015',
          value: 156
        },
        {
          name: '2014',
          value: 120
        },
        {
          name: '2013',
          value: 84
        },
        {
          name: '2012',
          value: 65
        },
        {
          name: '2011',
          value: 136
        },
        {
          name: '2010',
          value: 126
        }
      ]
    },
    {
      name: 'Adventure',
      series: [
        {
          name: '2017',
          value: 145
        },
        {
          name: '2016',
          value: 312
        },
        {
          name: '2015',
          value: 85
        },
        {
          name: '2014',
          value: 94
        },
        {
          name: '2013',
          value: 89
        },
        {
          name: '2012',
          value: 114
        },
        {
          name: '2011',
          value: 124
        },
        {
          name: '2010',
          value: 201
        }
      ]
    },
    {
      name: 'Fitness',
      series: [
        {
          name: '2017',
          value: 245
        },
        {
          name: '2016',
          value: 66
        },
        {
          name: '2015',
          value: 99
        },
        {
          name: '2014',
          value: 145
        },
        {
          name: '2013',
          value: 102
        },
        {
          name: '2012',
          value: 88
        },
        {
          name: '2011',
          value: 68
        },
        {
          name: '2010',
          value: 78
        }
      ]
    },
    {
      name: 'Håndbold',
      series: [
        {
          name: '2017',
          value: 215
        },
        {
          name: '2016',
          value: 112
        },
        {
          name: '2015',
          value: 98
        },
        {
          name: '2014',
          value: 88
        },
        {
          name: '2013',
          value: 80
        },
        {
          name: '2012',
          value: 84
        },
        {
          name: '2011',
          value: 78
        },
        {
          name: '2010',
          value: 62
        }
      ]
    },
    {
      name: 'Fodbold',
      series: [
        {
          name: '2017',
          value: 102
        },
        {
          name: '2016',
          value: 82
        },
        {
          name: '2015',
          value: 106
        },
        {
          name: '2014',
          value: 100
        },
        {
          name: '2013',
          value: 88
        },
        {
          name: '2012',
          value: 92
        },
        {
          name: '2011',
          value: 68
        },
        {
          name: '2010',
          value: 87
        }
      ]
    },
    {
      name: 'Badminton',
      series: [
        {
          name: '2017',
          value: 210
        },
        {
          name: '2016',
          value: 200
        },
        {
          name: '2015',
          value: 160
        },
        {
          name: '2014',
          value: 140
        },
        {
          name: '2013',
          value: 120
        },
        {
          name: '2012',
          value: 100
        },
        {
          name: '2011',
          value: 88
        },
        {
          name: '2010',
          value: 69
        }
      ]
    },
    {
      name: 'Dans',
      series: [
        {
          name: '2017',
          value: 144
        },
        {
          name: '2016',
          value: 140
        },
        {
          name: '2015',
          value: 134
        },
        {
          name: '2014',
          value: 124
        },
        {
          name: '2013',
          value: 114
        },
        {
          name: '2012',
          value: 100
        },
        {
          name: '2011',
          value: 98
        },
        {
          name: '2010',
          value: 60
        }
      ]
    },
    {
      name: 'E-Sport',
      series: [
        {
          name: '2017',
          value: 165
        },
        {
          name: '2016',
          value: 105
        },
        {
          name: '2015',
          value: 85
        },
        {
          name: '2014',
          value: 98
        },
        {
          name: '2013',
          value: 78
        },
        {
          name: '2012',
          value: 69
        },
        {
          name: '2011',
          value: 70
        },
        {
          name: '2010',
          value: 68
        }
      ]
    }
  ];
  legendTitle = 'Legend';
  tooltipDisabled = false;
  showGridLines = true;
  innerPadding = '10%';
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  showSeriesOnHover = true;

  curves = {
    Basis: shape.curveBasis,
    'Basis Closed': shape.curveBasisClosed,
    Bundle: shape.curveBundle.beta(1),
    Cardinal: shape.curveCardinal,
    'Cardinal Closed': shape.curveCardinalClosed,
    'Catmull Rom': shape.curveCatmullRom,
    'Catmull Rom Closed': shape.curveCatmullRomClosed,
    Linear: shape.curveLinear,
    'Linear Closed': shape.curveLinearClosed,
    'Monotone X': shape.curveMonotoneX,
    'Monotone Y': shape.curveMonotoneY,
    Natural: shape.curveNatural,
    Step: shape.curveStep,
    'Step After': shape.curveStepAfter,
    'Step Before': shape.curveStepBefore,
    default: shape.curveLinear
  };

  // line interpolation
  curveType = 'Linear';
  curve: any = this.curves[this.curveType];
  interpolationTypes = [
    'Basis', 'Bundle', 'Cardinal', 'Catmull Rom', 'Linear', 'Monotone X',
    'Monotone Y', 'Natural', 'Step', 'Step After', 'Step Before'
  ];

  closedCurveType = 'Linear Closed';
  closedCurve: any = this.curves[this.closedCurveType];
  closedInterpolationTypes = [
    'Basis Closed', 'Cardinal Closed', 'Catmull Rom Closed', 'Linear Closed'
  ];
  autoScale = true;
  rangeFillOpacity = 0.15;

  // bar
  barData = [
    {
      'name': '360 grader',
      'value': 1066
    },
    {
      'name': 'Triatlon',
      'value': 1403
    },
    {
      'name': 'Adventure',
      'value': 2546
    },
    {
      'name': 'Fitness',
      'value': 1856
    },
    {
      'name': 'Håndbold',
      'value': 845
    },
    {
      'name': 'Fodbold',
      'value': 1655
    },
    {
      'name': 'Badminton',
      'value': 2412
    },
    {
      'name': 'Dans',
      'value': 2689
    },
    {
      'name': 'E-Sport',
      'value': 1100
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
