package com.shruti.liferpg;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.view.WindowInsets;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {
    private WebView webView;
    private int insetTop = 0, insetBottom = 0;

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        webView = new WebView(this);
        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(true);
        s.setAllowContentAccess(false);

        webView.setOnApplyWindowInsetsListener(new View.OnApplyWindowInsetsListener() {
            @Override public WindowInsets onApplyWindowInsets(View v, WindowInsets insets) {
                if (android.os.Build.VERSION.SDK_INT >= 30) {
                    android.graphics.Insets bars = insets.getInsets(WindowInsets.Type.systemBars());
                    insetTop = bars.top;
                    insetBottom = bars.bottom;
                } else {
                    insetTop = insets.getSystemWindowInsetTop();
                    insetBottom = insets.getSystemWindowInsetBottom();
                }
                applyWebInsets();
                return insets;
            }
        });

        webView.setWebViewClient(new WebViewClient() {
            @Override public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                applyWebInsets();
                view.evaluateJavascript("(function(){['bonus.js','whimsy.js'].forEach(function(f){var s=document.createElement('script');s.src='file:///android_asset/'+f;document.head.appendChild(s);});})()", null);
            }
        });
        webView.setWebChromeClient(new WebChromeClient());
        webView.loadUrl("file:///android_asset/index.html");
        setContentView(webView);
    }

    private void applyWebInsets() {
        if (webView == null) return;
        final int top = insetTop;
        final int bottom = insetBottom;
        webView.post(() -> webView.evaluateJavascript(
            "(function(){var a=document.querySelector('.app');if(a){a.style.paddingTop='"+top+"px';}var t=document.querySelector('.tabs');if(t){t.style.paddingBottom='"+bottom+"px';t.style.height='calc(58px + "+bottom+"px)';}document.body.style.paddingBottom='"+(bottom+58)+"px';})()", null));
    }

    @Override public void onBackPressed() {
        if (webView != null && webView.canGoBack()) webView.goBack(); else super.onBackPressed();
    }
}
