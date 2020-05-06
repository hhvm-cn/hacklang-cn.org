/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const siteConfig = require(process.cwd() + "/siteConfig.js");
const translate = require("../../server/translate.js").translate;

const pre = "```";
const typeAnnotationExample= `${pre}hack
<?hh
class MyClass {
  const int MyConst = 0;
  private string $x = '';
  public function increment(int $x): int {
    $y = $x + 1;
    return $y;
  }
}
${pre}`;
const genericsExample = `${pre}hack
<?hh
class Box<T> {
  protected T $data;

  public function __construct(T $data) {
    $this->data = $data;
  }

  public function getData(): T {
    return $this->data;
  }
}
${pre}`;
const lambdaExample = `${pre}hack
<?hh
function foo(): (function(string): string) {
  $x = 'bar';
  return $y ==> $x . $y;
}
function test(): void {
  $fn = foo();
  echo $fn('baz'); // barbaz
}
${pre}`;
class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

class HomeSplash extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">
            <div className="projectLogo">
              <img src={`${siteConfig.baseUrl}img/hack.svg`} alt="Docusaurus with Keytar"/>
            </div>
            <div className="inner">
              <h2 className="projectTitle">
                {siteConfig.title}
                <small>{siteConfig.tagline}</small>
              </h2>
              <div className="section promoSection">
                <div className="promoRow">
                  <div className="pluginRowBlock">
                    <Button
                      href='https://docs.hhvm.com/hack/getting-started/getting-started'>
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    let language = this.props.language || "en";

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Container padding={["bottom", "top"]}>
            <GridBlock
              align="center"
              contents={[
                {
                  content: (
                    `Hack 兼顾了动态语言的快速开发周期和静态语言的语法规则，同时加入了许多其他编程语言中常见的特性`
                  ),
                  title: "快速开发",
                },
                {
                  content: (
                    `Hack 在你编写代码的时候会检查你的代码文件并提供即时类型检查，并且它通常在 200 毫秒内即可完成，不会有很明显的延迟，因此你可以很轻松地集成到你的开发流程中去`
                  ),
                  title: "类型检查",
                },
                {
                  content: (
                    `Hack 专为 [HHVM](http://hhvm.com) 而生，HHVM 为你的 Hack 应用供一个高性能的运行时`
                  ),
                  title: "为 HHVM 而生",
                }
              ]}
              layout="threeColumn"
            />
          </Container>
          <Container padding={["bottom", "top"]} background="light">
            <div className="gridBlock">
              <div className="blockElement imageAlignSide imageAlignLeft twoByGridBlock">
                <div className="blockImage">
                  <div>
                    <MarkdownBlock>
                      {typeAnnotationExample}
                    </MarkdownBlock>
                  </div>
                </div>
                <div className="blockContent">
                  <h2>
                    类型标注
                  </h2>
                  <div>
                    <MarkdownBlock>
                      你可以显式地标注参数、类成员属性和返回值的类型
                    </MarkdownBlock>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Container padding={["bottom", "top"]}>
            <div className="gridBlock">
              <div className="blockElement imageAlignSide twoByGridBlock">
                <div className="blockContent">
                  <h2>
                    泛型
                  </h2>
                  <div>
                    <MarkdownBlock>
                      泛型允许对类和方法进行参数化（即在实例化类或调用方法时指定类型），其使用方式与 C＃ 和 Java 之类的静态类语言相同。
                    </MarkdownBlock>
                  </div>
                </div>
                <div className="blockImage">
                  <div>
                    <MarkdownBlock>
                      {genericsExample}
                    </MarkdownBlock>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Container padding={["bottom", "top"]} background="light">
            <div className="gridBlock">
              <div className="blockElement imageAlignSide imageAlignLeft twoByGridBlock">
                <div className="blockImage">
                  <div>
                    <MarkdownBlock>
                      {lambdaExample}
                    </MarkdownBlock>
                  </div>
                </div>
                <div className="blockContent">
                  <h2>
                    Lambda 表达式
                  </h2>
                  <div>
                    <MarkdownBlock>
                    使用 Lambda 表达式可以很简洁地定义一个头等函数
                    </MarkdownBlock>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

module.exports = Index;
