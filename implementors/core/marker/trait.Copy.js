(function() {var implementors = {};
implementors["tower_http"] = [{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"tower_http/compression/struct.Compression.html\" title=\"struct tower_http::compression::Compression\">Compression</a>&lt;S&gt;","synthetic":false,"types":["tower_http::compression::service::Compression"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"tower_http/add_extension/struct.AddExtensionLayer.html\" title=\"struct tower_http::add_extension::AddExtensionLayer\">AddExtensionLayer</a>&lt;T&gt;","synthetic":false,"types":["tower_http::add_extension::AddExtensionLayer"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"tower_http/add_extension/struct.AddExtension.html\" title=\"struct tower_http::add_extension::AddExtension\">AddExtension</a>&lt;S, T&gt;","synthetic":false,"types":["tower_http::add_extension::AddExtension"]},{"text":"impl&lt;M:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, MakeSpan:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, OnRequest:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, OnResponse:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, OnBodyChunk:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, OnEos:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, OnFailure:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"tower_http/trace/struct.TraceLayer.html\" title=\"struct tower_http::trace::TraceLayer\">TraceLayer</a>&lt;M, MakeSpan, OnRequest, OnResponse, OnBodyChunk, OnEos, OnFailure&gt;","synthetic":false,"types":["tower_http::trace::layer::TraceLayer"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, M:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, MakeSpan:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, OnRequest:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, OnResponse:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, OnBodyChunk:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, OnEos:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, OnFailure:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"tower_http/trace/struct.Trace.html\" title=\"struct tower_http::trace::Trace\">Trace</a>&lt;S, M, MakeSpan, OnRequest, OnResponse, OnBodyChunk, OnEos, OnFailure&gt;","synthetic":false,"types":["tower_http::trace::service::Trace"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, B:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"tower_http/follow_redirect/policy/struct.And.html\" title=\"struct tower_http::follow_redirect::policy::And\">And</a>&lt;A, B&gt;","synthetic":false,"types":["tower_http::follow_redirect::policy::and::And"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"tower_http/follow_redirect/policy/struct.CloneBodyFn.html\" title=\"struct tower_http::follow_redirect::policy::CloneBodyFn\">CloneBodyFn</a>&lt;F&gt;","synthetic":false,"types":["tower_http::follow_redirect::policy::clone_body_fn::CloneBodyFn"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"tower_http/follow_redirect/policy/struct.Limited.html\" title=\"struct tower_http::follow_redirect::policy::Limited\">Limited</a>","synthetic":false,"types":["tower_http::follow_redirect::policy::limited::Limited"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, B:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"tower_http/follow_redirect/policy/struct.Or.html\" title=\"struct tower_http::follow_redirect::policy::Or\">Or</a>&lt;A, B&gt;","synthetic":false,"types":["tower_http::follow_redirect::policy::or::Or"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"tower_http/follow_redirect/policy/struct.RedirectFn.html\" title=\"struct tower_http::follow_redirect::policy::RedirectFn\">RedirectFn</a>&lt;F&gt;","synthetic":false,"types":["tower_http::follow_redirect::policy::redirect_fn::RedirectFn"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"tower_http/follow_redirect/policy/struct.SameOrigin.html\" title=\"struct tower_http::follow_redirect::policy::SameOrigin\">SameOrigin</a>","synthetic":false,"types":["tower_http::follow_redirect::policy::same_origin::SameOrigin"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"tower_http/follow_redirect/policy/enum.Action.html\" title=\"enum tower_http::follow_redirect::policy::Action\">Action</a>","synthetic":false,"types":["tower_http::follow_redirect::policy::Action"]},{"text":"impl&lt;P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"tower_http/follow_redirect/struct.FollowRedirectLayer.html\" title=\"struct tower_http::follow_redirect::FollowRedirectLayer\">FollowRedirectLayer</a>&lt;P&gt;","synthetic":false,"types":["tower_http::follow_redirect::FollowRedirectLayer"]},{"text":"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, P:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"tower_http/follow_redirect/struct.FollowRedirect.html\" title=\"struct tower_http::follow_redirect::FollowRedirect\">FollowRedirect</a>&lt;S, P&gt;","synthetic":false,"types":["tower_http::follow_redirect::FollowRedirect"]},{"text":"impl&lt;C:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"tower_http/classify/struct.MapFailureClass.html\" title=\"struct tower_http::classify::MapFailureClass\">MapFailureClass</a>&lt;C, F&gt;","synthetic":false,"types":["tower_http::classify::map_failure_class::MapFailureClass"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"enum\" href=\"tower_http/enum.LatencyUnit.html\" title=\"enum tower_http::LatencyUnit\">LatencyUnit</a>","synthetic":false,"types":["tower_http::LatencyUnit"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()